resource "aws_iam_role" "lambda_sns_role" {
name   = "contact_form_lamba_role"
assume_role_policy = <<EOF
{
 "Version": "2012-10-17",
 "Statement": [
   {
     "Action": "sts:AssumeRole",
     "Principal": {
       "Service": "lambda.amazonaws.com"
     },
     "Effect": "Allow",
     "Sid": ""
   }
 ]
}
EOF
}
resource "aws_iam_policy" "iam_policy_for_lambda" {
 
 name         = "aws_iam_policy_for_lambda"
 path         = "/"
 policy = <<EOF
{
 "Version": "2012-10-17",
 "Statement": [
   {
     "Action": [
       "logs:CreateLogGroup",
       "logs:CreateLogStream",
       "logs:PutLogEvents"
     ],
     "Resource": "arn:aws:logs:*:*:*",
     "Effect": "Allow"
   }
 ]
}
EOF
}
resource "aws_iam_policy" "iam_policy_for_lambda_to_sns_topic" {
 
 name         = "aws_iam_policy_for_lambda_to_sns"
 path         = "/"
 policy = <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "sns:Publish"
            ],
            "Resource": "arn:aws:sns:*:*:*"
        }
    ]
}
EOF
}
resource "aws_iam_role_policy_attachment" "role-policy-attachment" {
    for_each = {
        "lambda_policy" = aws_iam_policy.iam_policy_for_lambda.arn
    "sns_topic_policy" = aws_iam_policy.iam_policy_for_lambda_to_sns_topic.arn
  }

    role       = aws_iam_role.lambda_sns_role.name
    policy_arn = each.value
}

data "archive_file" "zip_the_python_code" {
type        = "zip"
source_dir  = "../lambda/src"
output_path = "../lambda/SendContactForm.zip"
}

resource "aws_lambda_function" "contact_form_to_sns" {
source_code_hash = data.archive_file.zip_the_python_code.output_base64sha256
filename  = "../lambda/SendContactForm.zip"
function_name  = "ContactFormToSNS"
role = aws_iam_role.lambda_sns_role.arn
handler = "SendContactForm.lambda_handler"
runtime = "python3.12"
depends_on = [aws_iam_role_policy_attachment.role-policy-attachment]
environment {
    variables = {
      SNS_ARN = aws_sns_topic.topic.arn
    }
  }
}
resource "aws_lambda_function_url" "contact_form_to_sns" {
  function_name      = aws_lambda_function.contact_form_to_sns.function_name
  authorization_type = "NONE"

  cors {
    allow_credentials = true
    allow_origins     = ["*"]
    allow_methods     = ["*"]
    allow_headers     = ["date", "keep-alive"]
    expose_headers    = ["keep-alive", "date"]
    max_age           = 86400
  }
}