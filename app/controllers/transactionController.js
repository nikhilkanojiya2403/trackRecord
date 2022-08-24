const pool = require('../db/db');
const {validateAmount} = require('../helpers/validations');

const view = async (req,res) => {
    try{
        const username = req.username;

        const fetchViewQuery = await pool.query('SELECT * from transactions WHERE id=$1',[username]);
        
        if(fetchViewQuery.rowCount == 0){
            return res.send("Not found any account!!!");
        }

        const fetchDetailQuery = await pool.query('SELECT * from users WHERE username=$1',[username]);

        const currUser = fetchDetailQuery.rows[0];

        const msg = {
            status:"success",
            name:currUser.name,
            username:currUser.username,
            mobile_no:currUser.mobile_no,
            currentBalance:fetchViewQuery.rows[0].curr_bal
        };

        return res.json(msg);

    }catch(err){
        console.error(err);
        return res.send(err);
    }
}

const credit = async (req,res) => {
    try{
        let {amt} = req.body;
         //validate amount
         if(!validateAmount(amt)){
            return res.send("Enter valid amount!!");
        }

        amt = parseInt(amt);

        const username = req.username;
      
        const updateQuery = await pool.query('UPDATE transactions SET curr_bal=curr_bal+$1 WHERE id=$2  returning *',[amt,username]);

        if(updateQuery.rowCount == 0){
            return res.send("Error in updating!!!");
        }

        const newamt = updateQuery.rows[0].curr_bal;
        const oldamt = newamt-amt;

        return res.send(`Updated from ${oldamt} to ${newamt}`);
        
    }catch(err){
        console.error(err);
        return res.send(err);
    }
}

const debit = async (req,res) => {
    try{
        let {amt} = req.body;
        console.log(amt);
        
        //validate amount
        if(!validateAmount(amt)){
            return res.send("Enter valid amount!!");
        }

        amt = parseInt(amt);

        const username = req.username;

        let curr_bal = await pool.query('SELECT curr_bal FROM transactions WHERE id=$1',[username]);
        
        curr_bal = curr_bal.rows[0].curr_bal;

        const left = curr_bal-amt;

        if(left<0){
            return res.send(`You cannot fetch ${amt} as your available balance is only ${curr_bal}`);
        }

        const updateQuery = await pool.query('UPDATE transactions SET curr_bal=curr_bal-$1 WHERE id=$2  returning *',[amt,username]);

        if(updateQuery.rowCount == 0){
            return res.send("Error in updating!!!");
        }

        const newamt = updateQuery.rows[0].curr_bal;

        const oldamt = newamt+amt;

        return res.send(`Updated from ${oldamt} to ${newamt}`);
        
    }catch(err){
        console.error(err);
        return res.send(err);
    }
}

module.exports = {
    credit,
    debit,
    view
}


