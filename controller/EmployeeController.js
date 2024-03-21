const db =require('../database/databaseConnection');


const  createEmployee=async (req,resp)=>{
    const employee={
        employeeId:req.body.employeeId,
        employeeName:req.body.employeeName,
        employeeRole:req.body.employeeRole
    }

    const createQuery= 'INSERT INTO employee(employeeId,employeeName,employeeRole) VALUES (?,?,?)';
    db.query(createQuery,[
        employee.employeeId,employee.employeeName,employee.employeeRole
    ],(err,result)=>{
        if(err){
            console.log(err);
            return resp.status(500).json({err:'something went wrong'});
        }
        return resp.status(201).json({message:'Employee was saved!'});
    });
    
}

const  findEmployee= async (req,resp)=>{  
    console.log("find working");

    const employeeId=req.params.employeeId;
    const findQuery= 'SELECT * FROM employee WHERE employeeId=?';
    db.query(findQuery,[employeeId],(err,selectedEmployee)=>{
        if(err){
            console.log(err);
            return resp.status(500).json({err:'something went wrong'});
        }
    
        return resp.status(200).json({data:selectedEmployee});
    });
    
}

const  updateEmployee= async(req,resp)=>{ 
    console.log("Update working");

    const employeeId=req.params.employeeId;
    console.log(employeeId);

    const createFetchQuery= 'SELECT * FROM employee WHERE employeeId=?';
    db.query(createFetchQuery,[employeeId],(err,selectedEmployee)=>{
        if(err){
            console.log(err);
            return resp.status(500).json({err:'something went wrong'});
        }

        const employee = {
            employeeId: req.body.employeeId,
            employeeName: req.body.employeeName,
            employeeRole:req.body.employeeRole
        };
    
        const updateQuery = 'UPDATE employee SET employeeName=?,employeeRole=? WHERE employeeId=?';
        db.query(updateQuery, [employee.employeeName,employee.employeeRole,employee.employeeId], (err, result) => {
            if (err) {
                console.log(err);
                return resp.status(500).json({ err: 'something went wrong' });
            }
            if (result.affectedRows === 0) {
                return resp.status(404).json({ err: 'Employee not found' });
            }
            return resp.status(200).json({ message: 'Employee was updated!' });
        });
    
    });
    
}

const  deleteEmployee= (req,resp)=>{ 
    const employeeId = req.params.employeeId;
    const deleteQuery='DELETE FROM employee WHERE employeeId=?';
    db.query(deleteQuery,[employeeId],(err,result)=>{
        if(err){
            console.log(err);
            return resp.status(500).json({error:'something went wrong'});
        }
        return resp.status(204).json({message:'Employee was deleted'});
    });  
}

const  findAllEmployee= (req,resp)=>{
    const findAllQuery='SELECT * FROM employee';
    db.query(findAllQuery,(err,result)=>{
        if(err){
            console.log(err);
            return resp.status(500).json({error:'something went wrong'});
        }
        return resp.status(200).json({data:result});
    });
}

module.exports={
    createEmployee,  
    findAllEmployee,
    updateEmployee,
    deleteEmployee,
    findEmployee
}