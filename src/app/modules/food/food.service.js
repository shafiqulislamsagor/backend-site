const Food = require("./food.model")

const InsertIntoDB = async(data)=>{
    const result = await Food.create(data)
    return result
}









const FoodService = {
    InsertIntoDB
}
module.exports = FoodService