resource "aws_s3_bucket" "www" {
  bucket = "${var.www_domain_name}"
}
resource "aws_s3_bucket_public_access_block" "www" {
  bucket = "${var.www_domain_name}"

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_website_configuration" "www" {
  bucket = "${var.www_domain_name}"

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

resource "aws_s3_bucket_policy" "allow_public_read" {
  bucket = "${var.www_domain_name}"
  policy = data.aws_iam_policy_document.allow_public_read.json
}

data "aws_iam_policy_document" "allow_public_read" {
  statement {
    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    
    }
    actions = [
      "s3:GetObject",
    ]

    resources = [
      "arn:aws:s3:::${var.www_domain_name}/*",
    ]
  }
}