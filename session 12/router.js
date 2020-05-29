const express = require('express');
const userControllers = require('./controllers/users');
const classControllers = require('./controllers/classes');
const courseControllers = require('./controllers/courses');
const authController = require('./controllers/auth')

const router = express.Router();

router.route('/login').post(authController.login)

router.route('/users').get(userControllers.getUsers)
router.route('/users').post(userControllers.createUser)
router.route('/users/:user_id').put(userControllers.editUser)
router.route('/users/:user_id').delete(userControllers.deleteUser);
router.route('/users-class/:class_id').get(authController.verifyToken, userControllers.getUsersByClass)

router.route('/classes').get(classControllers.getClasses)
router.route('/classes').post(classControllers.createClass)
router.route('/classes/:class_id').put(classControllers.editClass)
router.route('/classes/:class_id').delete(classControllers.deleteClass);

router.route('/courses').get(courseControllers.getCourses)
router.route('/courses').post(courseControllers.createCourse)
router.route('/courses/:course_id').put(courseControllers.editCourse)
router.route('/courses/:course_id').delete(courseControllers.deleteCourse);

module.exports = router;