const sendResponse = (res, options)=>{
    res.status(options.status).json({
        success: options.success,
        message: options.message,
        data: options.data
    })
}