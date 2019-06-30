export class User {
   id: String;
   fname: String;
   lname: String;
   age: number;
   gender: String;
   employmentStatus: String;
   incomeRange: String;
   usertype: String; //washer, user, admin

   //Washer questions 
   availabilityDays: String;
   availabilityHours: String;
   dryerAgeRange: String;
   vehicleAccess: String;
   carry20Pounds: boolean;

   //User questions
   laundryPlace: String;
   laundryFrequency: String;
   serviceUsage: String;

   //Tell if user is a subscriber
   subscriber: boolean;

}
