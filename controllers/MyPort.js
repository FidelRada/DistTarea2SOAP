module.exports =  {
    HelloWorld: function(args) {
        return { message: "hola " + args.name };
    },
    Add: function(args) {
        return { result: parseFloat(args.a) + parseFloat(args.b) };
    },
    Subtract: function(args) {
        return { result: parseFloat(args.a) - parseFloat(args.b) };
    },
    Multiply: function(args) {
        return { result: parseFloat(args.a) * parseFloat(args.b) };
    },
    Divide: function(args) {
        console.log(args.a +" "+ args.b)
        if (parseFloat(args.b) === 0 ){
            return { result: "divicion indefinida" };
        }
        return { result: parseFloat(args.a) / parseFloat(args.b) };
    }
}