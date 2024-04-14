const { Courses, sequelize } = require("../models");
module.exports = {
  create: async (req, res) => {
    try {
      const {
        courseId,
        title,
        subjectArea,
        description,
        preRequisites,
        toolsOrSoftwares,
        externalMaterial,
        reviewCount,
        noOfRegisteredStudents,
        rating,
        paragraphs,
      } = req.body;

      if(!courseId ||
        !title ||
        !subjectArea ||
        !description ||
        !preRequisites ||
        !toolsOrSoftwares||
        !externalMaterial ||
        !reviewCount ||
       ! noOfRegisteredStudents ||
        !rating||
       ! paragraphs){
        throw generateErrorInstance({
          status: 400,
          message: "Required fields can't be empty",
        });
       }

       let course = await Courses.findOne({
        where: {courseId}
       })
       if(course){
        throw generateErrorInstance({
          status: 400,
          message: "Course already exists",
        });
       }

       course = await Courses.create({
        courseId,
        title,
        subjectArea,
        description,
        preRequisites,
        toolsOrSoftwares,
        externalMaterial,
        reviewCount,
        noOfRegisteredStudents,
        rating,
        paragraphs,
       })
      return res.status(200).send({ course });
    } catch (err) {
      console.log(err);
      return res
        .status(err.status || 500)
        .send(err.message || "Something went wrong!");
    }
  },
  getAllCourses: async(req,res)=>{
    try{
      const courses = await Courses.findAll();
      return res.status(200).send({ courses });

    }catch (err) {
      console.log(err);
      return res
        .status(err.status || 500)
        .send(err.message || "Something went wrong!");
    }
  }
  
};
