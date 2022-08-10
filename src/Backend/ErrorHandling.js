const ErrorHandling = (error, method) => {
    if (error.errors[0].errorType === "DynamoDB:ConditionalCheckFailedException")
        alert("Please Enter different ID");
    else if (error.errors[0].errorType === "DynamoDB:DynamoDbException")
        alert("Enter all fields");
    else if (error.errors[0].message === `Variable 'input' has coerced Null value for NonNull type 'Create${method}Input!'`)
        alert("Enter valid input")
    else if (error.errors[0].message === `Variable 'input' has coerced Null value for NonNull type 'Delete${method}Input!'`)
        alert("Enter valid input")
    else if (error.errors[0].message === "Variable 'email' has coerced Null value for NonNull type 'String!'")
        alert("Please Provide correct email")
    else if (error.errors[0].message === "Variable 'input' has coerced Null value for NonNull type 'ID!'")
        alert("Enter Valid Values")
    else if (error.errors[0].message === "Variable 'id' has coerced Null value for NonNull type 'ID!'")
        alert("Enter Valid ID")
    else if (error.errors[0].message === "Variable 'organization' has coerced Null value for NonNull type 'String!'")
        alert("Oops Someting happens wrong!! Please Wait")
    else
        console.log(error)
}
export default ErrorHandling;