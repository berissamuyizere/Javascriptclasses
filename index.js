

// You are building a feature rollout system for a startup where a FeatureToggle constructor function has properties: featureName (string), isEnabled (boolean), and userGroupAccess (array of strings like "betaTesters", "admins"), and you must use a prototype method canAccess(userRole) to return true or false, a method toggleFeature(flag) to enable or disable the feature, and simulate access attempts using if-else and switch statements for different roles.

function FeatureToggle(featureName, isEnabled, userGroupAccess){
    this.featureName = featureName;
    this.isEnabled = isEnabled;
    this.userGroupAccess;
    this.userGroupAccess = userGroupAccess
}

FeatureToggle.prototype.canAccess = function(userRole){
    if(!this.isEnabled){
        return false;
    }
    switch(userRole){
        case "admin":
            console.log(`You have ${userRole} access`);
            break;
        case "betaTester":
            console.log(`You have ${userRole} access`);
            break;
        case "user":
            console.log(`You have ${userRole} access`);
            break;
        case "guest":
            console.log(`You have ${userRole} access`);
            break;
        default:
            "Access not found"

    }
}
FeatureToggle.prototype.toggleFeature = function(flag){
    if(flag == "disabled"){
        return flag = "enabled"
    }
    else{
        return  flag = "disabled"
    }
};

const feature = new FeatureToggle("darkmode", true, ["admin", "betaTester", "guest", "user"])

feature.canAccess("admin")

console.log(feature.toggleFeature("enabled"))


// In a freelancer time-tracking platform, create a TimeLog constructor function with properties: freelancerName (string), projectDetails (object with name and hourlyRate), and logs (array of objects with date, hoursWorked), then add prototype methods to calculate total earnings, filter logs by date range, and determine if weekly hours exceed 40 using if-else logic.


function TimeLog(freelanceName, projectDetails, logs){
    this.freelanceName = freelanceName;
    this.projectDetails = projectDetails;
    this.logs = logs
}

TimeLog.prototype.totalEarning = function(){
    return this.logs.reduce((total, log) =>
        total + (log.hoursWorked * this.projectDetails.hourlyRate), 0
    )
};

TimeLog.prototype.filterLogsByDate = function(startDate, endDate){
    return this.logs.filter(log =>
        log.date >= startDate && log.date<= endDate
    )
};

TimeLog.prototype.exceedsWeeklyHours = function(weekStartDate){
    const weekLogs = this.filterLogsByDate(weekStartDate, new Date(weekStartDate.getTime() + 6 *24*60*60*1000))
    const totalHuors = weekLogs.reduce((sum, log) => sum + log.hoursWorked, 0);
    return totalHuors > 40;
};

const freelancer = new TimeLog("Jimmy", {name: "Deliveries", hourlyRate: 50}, [{date: new Date("2022-03-20"), hoursWorked: 5}, {date: new Date("2025-03-25"), hoursWorked: 5}, {date: new Date("2025-03-20"), hoursWorked: 5}])

console.log(freelancer.totalEarning())
freelancer.filterLogsByDate()



// You are developing a startup’s order management system where an Order constructor function should contain customer (object with name and email), items (array of objects with productName, quantity, and unitPrice), and status (string), then implement prototype methods to compute total cost, update order status based on payment, and categorize order urgency using switch and conditional statements.

function Order(customer, items, status){
    this.customer = customer;
    this.items = items;
    this.status = status
}

Order.prototype.totalCost = function(){
    return this.items.reduce((total, item) => total + (item.quantity * item.unitPrice), 0);
};

Order.prototype.updateStatus = function(payment){
    this.status = payment ? "completed" : "pending";
};
 Order.prototype.checkUrgency = function(){
    const total = this.totalCost();
    if(total > 2000){
        return "high"
    }
    else if(total > 500){
        return "medium"
    }
    else{
        return "low"
    }
 };

 const order = new Order("Jane", [{product:"rice", quantity: 20, unitPrice: 100}, {product:"cake", quantity: 10, unitPrice: 120}, {product:"soap", quantity: 12, unitPrice: 100}], "paid")
 console.log(order.totalCost())

 order.updateStatus("paid")

 console.log(order.checkUrgency())



//  In a startup’s employee review tool, design an Employee class with properties: id (number), name (string), performanceMetrics (object with keys like communication, efficiency, and reliability), and feedback (array of strings), then use prototypes to calculate an average score, classify performance level using control flow, and add new feedback based on conditions.



 function Employee(id, name, performanceMetrics, feedback){
    this.id = id;
    this.name = name;
    this.performanceMetrics = performanceMetrics;
    this.feedback = feedback;
 }

 Employee.prototype.averageScore = function(){
    const scores = Object.values(this.performanceMetrics);
    return scores.reduce((sum, score) => sum + score, 0)/scores.length
 };

 Employee.prototype.classifyPerformance = function(){
    const avg = this.averageScore();
    if(avg >= 4.5){
        return "excelent"
    }
    else if(avg >= 3.5){
        return "good keep"
    }
    else{
        return "improve"
    }
 }

 Employee.prototype.feedBack = function(newFeedback){
    if(newFeedback.trim().length > 0){
        this.feedback.push(newFeedback)
    }
 }

const employee = new Employee(2,  "Beza", {communication: 2, efficiency: 3, reliability: 4}, ["good", "bad", "worse"])
console.log(employee.averageScore());
console.log(employee.classifyPerformance())

employee.feedBack("improved")
console.log(employee.feedback)


//  Build a simple e-learning system where a Course class has properties: title (string), instructor (object with name and expertise), and students (array of objects with name and completionStatus), then add prototype methods to return names of students who completed the course, count enrolled students by expertise area, and use control flow to output different messages for instructors with more or less than 5 students.


function Course(title, instructor, students) {
    this.title = title;
    this.instructor = instructor;
    this.students = students; 
}
Course.prototype.completedStudents = function() {
    return this.students
        .filter(student => student.completionStatus === "completed")
        .map(student => student.name);  
};
Course.prototype.enrolledStudentsByExpertise = function() {
    return this.students.filter(student => 
        student.expertise === this.instructor.expertise).length;
};
Course.prototype.instructorMessage = function() {
    return this.students.length > 5 ? "Your lesson is loved" : "You need more students";
};
const course = new Course(
    "Software engineering",
    {name: "Benard", expertise: "FrontEnd"},
    [
        {name: "Bonneur", completionStatus: true},
        {name: "Bobette", completionStatus: "pending", expertise: "FrontEnd"},
        {name: "Alice", completionStatus: "completed", expertise: "FrontEnd"},
        {name: "Bob", completionStatus: "completed" , expertise: "FrontEnd"},
        {name: "Aline", completionStatus: "pending", expertise: "backend"},
        {name: "Boby", completionStatus: "pending" , expertise: "FrontEnd"}
    ]
);
console.log(course.completedStudents());  
console.log(course.enrolledStudentsByExpertise());
console.log(course.instructorMessage())