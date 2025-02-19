const { Users, UserProfile, Employee, Departments, Positions, Category, Subcategory, Suppliers, Inventory, Brand, Sales, ShoppingCarts, Favorites, Salary, Attendance, Leave, LeaveBalance, Report, EmployeeReports, InventoryMovement, SalesInventory } = require('../models'); // Adjust the path as necessary

const users = Array.from({ length: 10 }, (_, i) => ({
  username: `testUser${i + 1}`,
  password: 'test123',
  admin: i % 3 === 0,
  company: 'test',
  role: i % 3 === 0 ? 'admin' : i % 2 === 0 ? 'seller' : 'user'
}));

const departments = Array.from({ length: 10 }, (_, i) => ({
  name: `Department${i + 1}`
}));

const positions = Array.from({ length: 10 }, (_, i) => ({
  title: `Position${i + 1}`,
  departmentId: (i % 10) + 1
}));

const categories = Array.from({ length: 10 }, (_, i) => ({
  name: `Category${i + 1}`
}));

const subcategories = Array.from({ length: 10 }, (_, i) => ({
  name: `Subcategory${i + 1}`,
  categoryId: (i % 10) + 1
}));

const suppliers = Array.from({ length: 10 }, (_, i) => ({
  name: `Supplier${i + 1}`,
  email: `supplier${i + 1}@example.com`,
  address: `Address${i + 1}`,
  landline: `555-555-55${i + 1}`,
  mobile: `555-555-55${i + 2}`,
  company: `Supplier Company ${i + 1}`
}));

const brands = Array.from({ length: 10 }, (_, i) => ({
  name: `Brand${i + 1}`
}));

const inventory = Array.from({ length: 10 }, (_, i) => ({
  name: `Item${i + 1}`,
  size: `${i + 1}00ml`,
  quantity: (i + 1) * 100,
  price: (i + 1) * 10.00,
  trigger: i % 2 === 0 ? (i + 1) * 10 : 0,
  supplierAlert: i % 2 === 0,
  supplierId: (i % 10) + 1,
  brandId: (i % 10) + 1,
  categoryId: (i % 10) + 1,
  subCategoryId: (i % 10) + 1
}));

const sales = Array.from({ length: 10 }, (_, i) => ({
  userId: (i % 10) + 1,
  inventoryId: (i % 10) + 1,
  quantity: (i + 1) * 2,
  total: (i + 1) * 20.00
}));

const shoppingCarts = Array.from({ length: 10 }, (_, i) => ({
  userId: (i % 10) + 1,
  inventoryId: (i % 10) + 1,
  quantity: (i + 1)
}));

const favorites = Array.from({ length: 10 }, (_, i) => ({
  userId: (i % 10) + 1,
  inventoryId: (i % 10) + 1
}));

const salaries = Array.from({ length: 10 }, (_, i) => ({
  employeeId: (i % 10) + 1,
  amount: (i + 1) * 5000,
  date: new Date()
}));

const attendances = Array.from({ length: 10 }, (_, i) => ({
  employeeId: (i % 10) + 1,
  date: new Date(),
  status: i % 2 === 0 ? 'Present' : 'Absent'
}));

const leaves = Array.from({ length: 10 }, (_, i) => ({
  employeeId: (i % 10) + 1,
  startDate: new Date(),
  endDate: new Date(),
  reason: i % 2 === 0 ? 'Vacation' : 'Sick'
}));

const leaveBalances = Array.from({ length: 10 }, (_, i) => ({
  employeeId: (i % 10) + 1,
  balance: (i + 1) * 5,
  remainingLeaveDays: (i + 1) * 5,
  totalLeaveDays: (i + 1) * 10
}));

const reports = Array.from({ length: 10 }, (_, i) => ({
  title: `Report${i + 1}`,
  content: `Report content ${i + 1}`
}));

const employeeReports = Array.from({ length: 10 }, (_, i) => ({
  employeeId: (i % 10) + 1,
  reportId: (i % 10) + 1
}));

const inventoryMovements = Array.from({ length: 10 }, (_, i) => ({
  inventoryId: (i % 10) + 1,
  userId: (i % 10) + 1,
  supplierId: (i % 10) + 1,
  quantity: (i + 1) * 10,
  movementType: i % 2 === 0 ? 'IN' : 'OUT',
  date: new Date()
}));

const salesInventory = Array.from({ length: 10 }, (_, i) => ({
  salesId: (i % 10) + 1,
  inventoryId: (i % 10) + 1,
  quantity: (i + 1) * 2,
  price: (i + 1) * 10.00
}));

const seedUsers = async () => {
  try {
    for (const userData of users) {
      const user = await Users.create(userData);

      if (userData.role === 'user') {
        await UserProfile.create({ userId: user.id, address: '123 Test St', city: 'Testville', state: 'TX', zipCode: '12345', phoneNumber: '555-555-5555' });
      } else if (userData.role === 'seller') {
        await Employee.create({ userId: user.id, departmentId: 1, positionId: 3, hired: new Date() });
      } else if (userData.role === 'admin') {
        await Employee.create({ userId: user.id, departmentId: 1, positionId: 1, hired: new Date() });
      }
    }
    console.log('Users seeded successfully');
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};

const seedDepartments = async () => {
  try {
    for (const departmentData of departments) {
      await Departments.create(departmentData);
    }
    console.log('Departments seeded successfully');
  } catch (error) {
    console.error('Error seeding departments:', error);
  }
};

const seedPositions = async () => {
  try {
    for (const positionData of positions) {
      await Positions.create(positionData);
    }
    console.log('Positions seeded successfully');
  } catch (error) {
    console.error('Error seeding positions:', error);
  }
};

const seedCategories = async () => {
  try {
    for (const categoryData of categories) {
      await Category.create(categoryData);
    }
    console.log('Categories seeded successfully');
  } catch (error) {
    console.error('Error seeding categories:', error);
  }
};

const seedSubcategories = async () => {
  try {
    for (const subcategoryData of subcategories) {
      await Subcategory.create(subcategoryData);
    }
    console.log('Subcategories seeded successfully');
  } catch (error) {
    console.error('Error seeding subcategories:', error);
  }
};

const seedSuppliers = async () => {
  try {
    for (const supplierData of suppliers) {
      await Suppliers.create(supplierData);
    }
    console.log('Suppliers seeded successfully');
  } catch (error) {
    console.error('Error seeding suppliers:', error);
  }
};

const seedBrands = async () => {
  try {
    for (const brandData of brands) {
      await Brand.create(brandData);
    }
    console.log('Brands seeded successfully');
  } catch (error) {
    console.error('Error seeding brands:', error);
  }
};

const seedInventory = async () => {
  try {
    for (const inventoryData of inventory) {
      await Inventory.create(inventoryData);
    }
    console.log('Inventory seeded successfully');
  } catch (error) {
    console.error('Error seeding inventory:', error);
  }
};

const seedSales = async () => {
  try {
    for (const salesData of sales) {
      await Sales.create(salesData);
    }
    console.log('Sales seeded successfully');
  } catch (error) {
    console.error('Error seeding sales:', error);
  }
};

const seedShoppingCarts = async () => {
  try {
    for (const shoppingCartData of shoppingCarts) {
      await ShoppingCarts.create(shoppingCartData);
    }
    console.log('Shopping Carts seeded successfully');
  } catch (error) {
    console.error('Error seeding shopping carts:', error);
  }
};

const seedFavorites = async () => {
  try {
    for (const favoriteData of favorites) {
      await Favorites.create(favoriteData);
    }
    console.log('Favorites seeded successfully');
  } catch (error) {
    console.error('Error seeding favorites:', error);
  }
};

const seedSalaries = async () => {
  try {
    for (const salaryData of salaries) {
      await Salary.create(salaryData);
    }
    console.log('Salaries seeded successfully');
  } catch (error) {
    console.error('Error seeding salaries:', error);
  }
};

const seedAttendances = async () => {
  try {
    for (const attendanceData of attendances) {
      await Attendance.create(attendanceData);
    }
    console.log('Attendances seeded successfully');
  } catch (error) {
    console.error('Error seeding attendances:', error);
  }
};

const seedLeaves = async () => {
  try {
    for (const leaveData of leaves) {
      await Leave.create(leaveData);
    }
    console.log('Leaves seeded successfully');
  } catch (error) {
    console.error('Error seeding leaves:', error);
  }
};

const seedLeaveBalances = async () => {
  try {
    for (const leaveBalanceData of leaveBalances) {
      await LeaveBalance.create(leaveBalanceData);
    }
    console.log('Leave Balances seeded successfully');
  } catch (error) {
    console.error('Error seeding leave balances:', error);
  }
};

const seedReports = async () => {
  try {
    for (const reportData of reports) {
      await Report.create(reportData);
    }
    console.log('Reports seeded successfully');
  } catch (error) {
    console.error('Error seeding reports:', error);
  }
};

const seedEmployeeReports = async () => {
  try {
    for (const employeeReportData of employeeReports) {
      await EmployeeReports.create(employeeReportData);
    }
    console.log('Employee Reports seeded successfully');
  } catch (error) {
    console.error('Error seeding employee reports:', error);
  }
};

const seedInventoryMovements = async () => {
  try {
    for (const inventoryMovementData of inventoryMovements) {
      await InventoryMovement.create(inventoryMovementData);
    }
    console.log('Inventory Movements seeded successfully');
  } catch (error) {
    console.error('Error seeding inventory movements:', error);
  }
};

const seedSalesInventory = async () => {
  try {
    for (const salesInventoryData of salesInventory) {
      await SalesInventory.create(salesInventoryData);
    }
    console.log('Sales Inventory seeded successfully');
  } catch (error) {
    console.error('Error seeding sales inventory:', error);
  }
};

const seeder = async () => {
  console.log('seedDepartments');
  await seedDepartments();
  console.log('completed seedDepartments');
  
  console.log('seedPositions');
  await seedPositions();
  console.log('completed seedPositions');
  
  console.log('seedCategories');
  await seedCategories();
  console.log('completed seedCategories');
  
  console.log('seedSubcategories');
  await seedSubcategories();
  console.log('completed seedSubcategories');
  
  console.log('seedSuppliers');
  await seedSuppliers();
  console.log('completed seedSuppliers');
  
  console.log('seedBrands');
  await seedBrands();
  console.log('completed seedBrands');
  
  console.log('seedUsers');
  await seedUsers();
  console.log('completed seedUsers');
  
  console.log('seedInventory');
  await seedInventory();
  console.log('completed seedInventory');
  
  console.log('seedSales');
  await seedSales();
  console.log('completed seedSales');
  
  console.log('seedShoppingCarts');
  await seedShoppingCarts();
  console.log('completed seedShoppingCarts');
  
  console.log('seedFavorites');
  await seedFavorites();
  console.log('completed seedFavorites');
  
  console.log('seedSalaries');
  await seedSalaries();
  console.log('completed seedSalaries');
  
  console.log('seedAttendances');
  await seedAttendances();
  console.log('completed seedAttendances');
  
  console.log('seedLeaves');
  await seedLeaves();
  console.log('completed seedLeaves');
  
  console.log('seedLeaveBalances');
  await seedLeaveBalances();
  console.log('completed seedLeaveBalances');
  
  console.log('seedReports');
  await seedReports();
  console.log('completed seedReports');
  
  console.log('seedEmployeeReports');
  await seedEmployeeReports();
  console.log('completed seedEmployeeReports');
  
  console.log('seedInventoryMovements');
  await seedInventoryMovements();
  console.log('completed seedInventoryMovements');

  console.log('seedSalesInventory');
  await seedSalesInventory();
  console.log('completed seedSalesInventory');

  process.exit();
};

seeder();