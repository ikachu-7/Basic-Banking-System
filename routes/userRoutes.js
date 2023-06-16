const express = require('express');
const userModel = require('../models/userModel');
const transactionModel = require('../models/transactionModel');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Hi from me");
})

router.post('/userdata',async (req,res) => {
    try {
        const {name,email,currentBalance,bankName} = req.body;
        if(!name || !email || !currentBalance || !bankName) {
            return res.status(400).send({
                success: false,
                msg: "Please fill all the fields"
            });
        }

        const user = await userModel.findOne({email});

        if(user) {
            return res.status(400).send({
                success: false,
                msg: "Customer already there"
            });
        }

        const newuser = new userModel({name,email,currentBalance,bankName});
        await newuser.save();
        res.status(200).send({
            success: true,
            msg: "Customer added ",
            newuser
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            msg: "Error while sending",
            error
        });
    }
})
router.get('/getAllusers',async (req,res) => {
    try {
        const allusers = await userModel.find({}).sort({createdAt:-1});
        if(!allusers) {
            return res.status(400).send({
                success: false,
                msg: "Something went wrong"
            });
        }
        res.status(200).send({
            success: true,
            msg: "All users passed",
            allusers
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            error
        });
    }
})
router.post('/updateUser',async (req,res) => {
    try {
        const {from,name,senderemail,getteremail,bankname,updateBalance} = req.body;
        if(!from || !name || !senderemail || !getteremail || !bankname || !updateBalance) {
            return res.status(206).send({
                success: false,
                msg: "Please fill all the fields"
            });
        }


        const newTransaction = new transactionModel({sender: from,receiver: name,amount: Number(updateBalance)});
        await newTransaction.save();

        const exist = await userModel.findOne({name ,email:getteremail, bankName: bankname});
        if(!exist) {
            return res.status(206).send({
                success: false,
                msg: `${name} doesn't have account in ${bankname}`
            });
        }
        const from_user = await userModel.findOne({name:from,email:senderemail});
        if(!from_user) {
            const num = Number(updateBalance);
            const newBalance = num + exist.currentBalance;
            await userModel.findByIdAndUpdate(exist._id,{currentBalance: newBalance});
            return res.status(200).send({
                success: true,
                msg: "Transaction successfull"
            });
        } 
        if(from_user.currentBalance >= Number(updateBalance)) {
            const num = Number(updateBalance);
            const newBalanceforRecep = num + exist.currentBalance;
            const newBalanceforSender = from_user.currentBalance - num;
            await userModel.findByIdAndUpdate(exist._id,{currentBalance: newBalanceforRecep});
            await userModel.findByIdAndUpdate(from_user._id,{currentBalance: newBalanceforSender});
            return res.status(200).send({
                success: true,
                msg: `${num}rs got transfer to ${name}`
            });
        }  
        if(from_user.currentBalance < Number(updateBalance)) {
            return res.status(206).send({
                success: false,
                msg: `${from} do not have sufficient balance to send`
            });
        }      
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            msg: "Something went wrong",
            error
        });
    }
})

router.get('/getSingleUser/:id',async (req,res) => {
    try {
        const id  = req.params.id;
        if(!id) {
            return res.status(400).send({
                success: false,
                msg: "Did not get id"
            });
        }
        const user = await userModel.findById(id);
        if(!user) {
            return res.status(400).send({
                success: false,
                msg: "Developer fault"
            });
        }
        res.status(200).send({
            success: true,
            msg:" Succesfully got the user",
            user
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            msg: "Something went wrong",
            error
        });
    }
});

router.get('/transaction',async (req,res) => {
    try {
        const alltransaction = await transactionModel.find({}).sort( {createdAt: -1 } );
        if(!alltransaction) {
            return res.status(400).send({
                success: false,
                msg: "Something went wrong"
            });
        }
        res.status(200).send({
            success: true,
            msg: "All transaction passed",
            alltransaction
        });
    } catch (error) {
        console.log(error);
        res.send(400).send({
            success: false,
            msg: "Something went wrong",
            error
        });
    }
})
module.exports = router;