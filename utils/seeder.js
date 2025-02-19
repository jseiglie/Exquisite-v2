const { Users, UserProfile, Employee, Departments, Positions, Category, Subcategory, Suppliers, Inventory, Brand, Sales, ShoppingCarts, Favorites, Salary, Attendance, Leave, LeaveBalance, Report, EmployeeReports, InventoryMovement } = require('../models'); // Adjust the path as necessary

const users = [
  {
    username: 'testUser1',
    password: 'test123',
    admin: false,
    company: 'test',
    role: 'user'
  },
  {
    username: 'testUser2',
    password: 'test123',
    admin: false,
    company: 'test',
    role: 'user'
  },
  {
    username: 'testSeller1',
    password: 'test123',
    admin: false,
    company: 'test',
    role: 'seller'
  },
  {
    username: 'testSeller2',
    password: 'test123',
    admin: false,
    company: 'test',
    role: 'seller'
  },
  {
    username: 'testAdmin1',
    password: 'test123',
    admin: true,
    company: 'test',
    role: 'admin'
  },
  {
    username: 'testAdmin2',
    password: 'test123',
    admin: true,
    company: 'test',
    role: 'admin'
  }
];

const departments = [
  { name: 'HR' },
  { name: 'Engineering' },
  { name: 'Sales' },
  { name: 'Marketing' }
];

const positions = [
  { title: 'Manager', departmentId: 1 },
  { title: 'Developer', departmentId: 2 },
  { title: 'Sales Representative', departmentId: 3 },
  { title: 'Marketing Specialist', departmentId: 4 }
];

const categories = [
  { name: 'ron' },
  { name: 'whisky' },
  { name: 'tequila' }
];

const subcategories = [
  { name: '7 años', categoryId: 1 },
  { name: '3 años', categoryId: 1 },
  { name: 'blanco', categoryId: 3 },
  { name: 'blended', categoryId: 2 },
  { name: 'single malt', categoryId: 2 },
  { name: 'bourbon', categoryId: 2 }
];

const suppliers = [
  { name: 'Supplier1', email: 'supplier1@example.com', address: '123 Supplier St', landline: '555-555-5551', mobile: '555-555-5552', company: 'Supplier Company 1' },
  { name: 'Supplier2', email: 'supplier2@example.com', address: '456 Supplier Ave', landline: '555-555-5553', mobile: '555-555-5554', company: 'Supplier Company 2' },
  { name: 'Supplier3', email: 'supplier3@example.com', address: '789 Supplier Blvd', landline: '555-555-5555', mobile: '555-555-5556', company: 'Supplier Company 3' }
];

const brands = [
  { name: 'Bacardi' },
  { name: 'Johnnie Walker' },
  { name: 'Jose Cuervo' },
  { name: 'Jack Daniels' },
  { name: 'Chivas Regal' },
  { name: 'Jameson' },
  { name: 'Havana Club' },
  { name: 'Ron Santiago' }
];

const inventory = [
  { name: 'Item1', size: '100ml', quantity: 100, price: 10.00, trigger: 10, supplierAlert: false, supplierId: 1, brandId: 1, categoryId: 1, subCategoryId: 1 },
  { name: 'Item2', size: '500ml', quantity: 200, price: 20.00, trigger: 20, supplierAlert: true, supplierId: 2, brandId: 2, categoryId: 2, subCategoryId: 2 },
  { name: 'Item3', size: '1l', quantity: 300, price: 30.00, trigger: 0, supplierAlert: false, supplierId: 3, brandId: 3, categoryId: 3, subCategoryId: 3 },
  { name: 'Item4', size: '2l', quantity: 400, price: 40.00, trigger: 40, supplierAlert: true, supplierId: 1, brandId: 1, categoryId: 1, subCategoryId: 1 },
  { name: 'Item5', size: '100ml', quantity: 150, price: 15.00, trigger: 15, supplierAlert: false, supplierId: 2, brandId: 2, categoryId: 2, subCategoryId: 2 },
  { name: 'Item6', size: '500ml', quantity: 250, price: 25.00, trigger: 25, supplierAlert: true, supplierId: 3, brandId: 3, categoryId: 3, subCategoryId: 3 },
  { name: 'Item7', size: '1l', quantity: 350, price: 35.00, trigger: 0, supplierAlert: false, supplierId: 1, brandId: 1, categoryId: 1, subCategoryId: 1 },
  { name: 'Item8', size: '2l', quantity: 450, price: 45.00, trigger: 45, supplierAlert: true, supplierId: 2, brandId: 2, categoryId: 2, subCategoryId: 2 },
  { name: 'Item9', size: '100ml', quantity: 120, price: 12.00, trigger: 12, supplierAlert: false, supplierId: 3, brandId: 3, categoryId: 3, subCategoryId: 3 },
  { name: 'Item10', size: '500ml', quantity: 220, price: 22.00, trigger: 22, supplierAlert: true, supplierId: 1, brandId: 1, categoryId: 1, subCategoryId: 1 }
];

const sales = [
  { userId: 1, inventoryId: 1, quantity: 2, total: 20.00 },
  { userId: 2, inventoryId: 2, quantity: 1, total: 20.00 }
];

const shoppingCarts = [
  { userId: 1, inventoryId: 1, quantity: 1 },
  { userId: 2, inventoryId: 2, quantity: 2 }
];

const favorites = [
  { userId: 1, inventoryId: 1 },
  { userId: 2, inventoryId: 2 }
];

const salaries = [
  { employeeId: 1, amount: 50000, date: new Date() },
  { employeeId: 2, amount: 60000, date: new Date() }
];

const attendances = [
  { employeeId: 1, date: new Date(), status: 'Present' },
  { employeeId: 2, date: new Date(), status: 'Absent' }
];

const leaves = [
  { employeeId: 1, startDate: new Date(), endDate: new Date(), reason: 'Vacation' },
  { employeeId: 2, startDate: new Date(), endDate: new Date(), reason: 'Sick' }
];

const leaveBalances = [
  { employeeId: 1, balance: 10, remainingLeaveDays: 10, totalLeaveDays: 20 },
  { employeeId: 2, balance: 5, remainingLeaveDays: 5, totalLeaveDays: 20 }
];

const reports = [
  { title: 'Monthly Report', content: 'Report content' },
  { title: 'Annual Report', content: 'Report content' }
];

const employeeReports = [
  { employeeId: 1, reportId: 1 },
  { employeeId: 2, reportId: 2 }
];

const inventoryMovements = [
  { inventoryId: 1, userId: 1, supplierId: 1, quantity: 10, movementType: 'IN', date: new Date() },
  { inventoryId: 2, userId: 2, supplierId: 2, quantity: 20, movementType: 'OUT', date: new Date() },
  { inventoryId: 3, userId: 1, supplierId: 3, quantity: 30, movementType: 'IN', date: new Date() },
  { inventoryId: 4, userId: 2, supplierId: 1, quantity: 40, movementType: 'OUT', date: new Date() }
];

const seedUsers = async () => {
  try {
    let i = 0;
    for (const userData of users) {
      userData.username += i;
      const user = await Users.create(userData);

      if (userData.role === 'user') {
        await UserProfile.create({ userId: user.id, address: '123 Test St', city: 'Testville', state: 'TX', zipCode: '12345', phoneNumber: '555-555-5555' });
      } else if (userData.role === 'seller') {
        await Employee.create({ userId: user.id, departmentId: 1, positionId: 3, hired: new Date() });
      } else if (userData.role === 'admin') {
        await Employee.create({ userId: user.id, departmentId: 1, positionId: 1, hired: new Date() });
      }
      i++;
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

  process.exit();
};

seeder();