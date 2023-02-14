# DynamoDB Resource
resource "aws_dynamodb_table" "onboarding_table" {
  name           = "onboarding-table"
  billing_mode   = "PROVISIONED"
  read_capacity  = "1"
  write_capacity = "1"
  attribute {
    name = "id"
    type = "S"
  }
  hash_key = "id"
}
