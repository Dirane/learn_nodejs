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
      }
      customerList.push(customer);
}

const updateCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      // Write the Logic here
}

const getAllCustomers=()=>{
  // Write the Logic here
}

module.exports={addCustomer,updateCustomer,getAllCustomers}