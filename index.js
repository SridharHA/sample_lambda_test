exports.handler = async(event,context)=>{
    console.log(event.queryStringParameters.email);
    console.log(event.queryStringParameters.role);
   return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "sridhar"
        },
        null,
        2
      ),
    };
}