var customerList=[];

const addCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      // Write the Logic here
      const customer = {
            CustomerId,
            CustomerName,
            CustomerAge,
            CustomerAddress,
            CustomerContactNumber,
            Category
      };

      const existingCustomer = customerList.find((cust) => cust.CustomerId === CustomerId)
      if(!existingCustomer){

            customerList.push(customer);
      }
}

const updateCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      // Write the Logic here
      const customer = customerList.find((cust)=> cust.CustomerId === CustomerId);
      if(customer){
            customer.CustomerName = CustomerName;
            customer.CustomerAge = CustomerAge;
            customer.CustomerAddress = CustomerAddress;
            customer.CustomerContactNumber = CustomerContactNumber;
            customer.Category = Category;
      }
}

const getAllCustomers=()=>{
  // Write the Logic here
  return customerList;
}

module.exports={addCustomer,updateCustomer,getAllCustomers}