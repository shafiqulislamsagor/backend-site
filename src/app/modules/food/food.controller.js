const catchAsync = require("../../../shared/catchasync")
const FoodService = require("./food.service")

const insertIntoDB = catchAsync(
    async(req,res)=>{
  
        const result = await FoodService.InsertIntoDB(req.body)
        res.status(201).json({
            success: true,
            message: "Successfully inserted",
            data: result
        })
      
    }
)

const FoodController = {
    insertIntoDB
}
module.exports = FoodController