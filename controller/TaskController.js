const db =require('../database/databaseConnection');


const  createTask=async (req,resp)=>{
    const task={
        taskId:req.body.taskId,
        taskName:req.body.taskName,
        project_id:req.body.project_id
    }

    const createQuery= 'INSERT INTO task(taskId,taskName,project_id) VALUES (?,?,?)';
    db.query(createQuery,[
        task.taskId,task.taskName,task.project_id
    ],(err,result)=>{
        if(err){
            console.log(err);
            return resp.status(500).json({err:'something went wrong'});
        }
        return resp.status(201).json({message:'Task was saved!'});
    });
    
}

const  findTask= async (req,resp)=>{  
    console.log("find working");

    const taskId=req.params.taskId;
    const findQuery= 'SELECT * FROM task WHERE taskId=?';
    db.query(findQuery,[taskId],(err,selectedTask)=>{
        if(err){
            console.log(err);
            return resp.status(500).json({err:'something went wrong'});
        }
    
        return resp.status(200).json({data:selectedTask});
    });
    
}

const  updateTask= async(req,resp)=>{ 
    console.log("Update working");

    const taskId=req.params.taskId;
    console.log(taskId);

    const createFetchQuery= 'SELECT * FROM task WHERE taskId=?';
    db.query(createFetchQuery,[taskId],(err,selectedTask)=>{
        if(err){
            console.log(err);
            return resp.status(500).json({err:'something went wrong'});
        }

        const task = {
            taskId: req.body.taskId,
            taskName: req.body.taskName
        };
    
        const updateQuery = 'UPDATE task SET taskName=? WHERE taskId=?';
        db.query(updateQuery, [task.taskName,task.taskId], (err, result) => {
            if (err) {
                console.log(err);
                return resp.status(500).json({ err: 'something went wrong' });
            }
            if (result.affectedRows === 0) {
                return resp.status(404).json({ err: 'Task not found' });
            }
            return resp.status(200).json({ message: 'Task was updated!' });
        });
    
    });
    
}

const  deleteTask= (req,resp)=>{ 
    const taskId = req.params.taskId;
    const deleteQuery='DELETE FROM project WHERE taskId=?';
    db.query(deleteQuery,[taskId],(err,result)=>{
        if(err){
            console.log(err);
            return resp.status(500).json({error:'something went wrong'});
        }
        return resp.status(204).json({message:'Task was deleted'});
    });  
}

const  findAllTask= (req,resp)=>{
    const findAllQuery='SELECT * FROM task';
    db.query(findAllQuery,(err,result)=>{
        if(err){
            console.log(err);
            return resp.status(500).json({error:'something went wrong'});
        }
        return resp.status(200).json({data:result});
    });
}

module.exports={
    createTask,  
    findAllTask,
    updateTask,
    deleteTask,
    findTask
}