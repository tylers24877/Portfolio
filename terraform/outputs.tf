output "cloudpoint_url" {
  value = aws_cloudfront_distribution.s3_distribution.domain_name
}
output "lambda_url" {
  value = aws_lambda_function_url.contact_form_to_sns.function_url  
}