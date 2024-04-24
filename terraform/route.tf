resource "aws_route53_zone" "default" {
  name = "tylersimmonds.dev"
}

resource "aws_route53_record" "tylersimmonds-dev" {
  zone_id = aws_route53_zone.default.zone_id
  name    = "tylersimmonds.dev"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.s3_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.s3_distribution.hosted_zone_id
    evaluate_target_health = true
  }
}
resource "aws_route53_record" "validate" {
  for_each = {
    for dvo in aws_acm_certificate.default.domain_validation_options : dvo.domain_name => {
      name    = dvo.resource_record_name
      record  = dvo.resource_record_value
      type    = dvo.resource_record_type
      zone_id = dvo.domain_name == "tylersimmonds.dev" ? aws_route53_zone.default.zone_id : aws_route53_zone.default.zone_id
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = each.value.zone_id
}