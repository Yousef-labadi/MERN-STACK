const express = require("express");
const app = express();
const { faker } = require('@faker-js/faker');
//email /password /firstname{internet}
//phoneNumber{phone}
//
const createUser = () => {
  const newFake = {
      firstName: faker.person.firstName(),
      lastName:faker.person.lastName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
      phoneNumber:faker.phone.number(),
      id:faker.number.int()
  };
  return newFake;
};
const createCompany = () => {
  const newFake = {
      name: faker.company.name(),
      id:faker.number.int(),
      address:{
        street:faker.location.street(),
        city:faker.location.city(),
        zipCode:faker.location.zipCode(),
        country:faker.location.country(),
        state:faker.location.state()
        
      }
      
      
  };
  return newFake;
};
  


// req is short for request
// res is short for response
app.get("/api/users/new", (req, res) => {
  res.json(createUser());
});
app.get("/api/companies/new", (req, res) => {
  res.json(createCompany());
});
//"/api/user/company" 
app.get("/api/user/company", (req, res) => {
  
  res.json({"company":createCompany(),"user":createUser()});
});
const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
