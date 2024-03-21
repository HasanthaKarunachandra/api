const db =require('../database/databaseConnection');


const  createProject=async (req,resp)=>{
    const project={
        projectId:req.body.projectId,
        projectName:req.body.projectName
    }

    const createQuery= 'INSERT INTO project(projectId,projectName) VALUES (?,?)';
    db.query(createQuery,[
        project.projectId,project.projectName
    ],(err,result)=>{
        if(err){
            console.log(err);
            return resp.status(500).json({err:'something went wrong'});
        }
        return resp.status(201).json({message:'Project was saved!'});
    });
    
}

const  findProject= async (req,resp)=>{  
    console.log("find working");

    const projectId=req.params.projectId;
    const findQuery= 'SELECT * FROM project WHERE projectId=?';
    db.query(findQuery,[projectId],(err,selectedProject)=>{
        if(err){
            console.log(err);
            return resp.status(500).json({err:'something went wrong'});
        }
    
        return resp.status(200).json({data:selectedProject});
    });
    
}

const  updateProject= async(req,resp)=>{ 
    console.log("Update working");

    const projectId=req.params.projectId;
    console.log(projectId);

    const createFetchQuery= 'SELECT * FROM project WHERE projectId=?';
    db.query(createFetchQuery,[projectId],(err,selectedProject)=>{
        if(err){
            console.log(err);
            return resp.status(500).json({err:'something went wrong'});
        }

        const project = {
            projectId: req.body.projectId,
            projectName: req.body.projectName
        };
    
        const updateQuery = 'UPDATE project SET projectName=? WHERE projectId=?';
        db.query(updateQuery, [project.projectName,project.projectId], (err, result) => {
            if (err) {
                console.log(err);
                return resp.status(500).json({ err: 'something went wrong' });
            }
            if (result.affectedRows === 0) {
                return resp.status(404).json({ err: 'Project not found' });
            }
            return resp.status(200).json({ message: 'Project was updated!' });
        });
    
    });
    
}

const  deleteProject= (req,resp)=>{ 
    const projectId = req.params.projectId;
    const deleteQuery='DELETE FROM project WHERE projectId=?';
    db.query(deleteQuery,[projectId],(err,result)=>{
        if(err){
            console.log(err);
            return resp.status(500).json({error:'something went wrong'});
        }
        return resp.status(204).json({message:'Project was deleted'});
    });  
}

const  findAllProject= (req,resp)=>{
    const findAllQuery='SELECT * FROM project';
    db.query(findAllQuery,(err,result)=>{
        if(err){
            console.log(err);
            return resp.status(500).json({error:'something went wrong'});
        }
        return resp.status(200).json({data:result});
    });
}

module.exports={
    createProject,  
    findAllProject,
    updateProject,
    deleteProject,
    findProject
}