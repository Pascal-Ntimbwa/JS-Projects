const data = [
  // Smartphones
  {
    id: 1,
    title: "iPhone 13",
    price: 999,
    inStock: true,
    category: "smartphones",
  },
  {
    id: 2,
    title: "Samsung Galaxy S21",
    price: 799,
    inStock: true,
    category: "smartphones",
  },
  {
    id: 3,
    title: "Google Pixel 6",
    price: 699,
    inStock: false,
    category: "smartphones",
  },
  {
    id: 4,
    title: "OnePlus 9 Pro",
    price: 899,
    inStock: true,
    category: "smartphones",
  },
  {
    id: 5,
    title: "Xiaomi Mi 11",
    price: 649,
    inStock: true,
    category: "smartphones",
  },
  {
    id: 6,
    title: "Huawei P40 Pro",
    price: 799,
    inStock: false,
    category: "smartphones",
  },
  {
    id: 7,
    title: "Sony Xperia 1 III",
    price: 1099,
    inStock: true,
    category: "smartphones",
  },
  {
    id: 8,
    title: "LG V60 ThinQ",
    price: 499,
    inStock: true,
    category: "smartphones",
  },
  {
    id: 9,
    title: "Nokia 9 PureView",
    price: 349,
    inStock: false,
    category: "smartphones",
  },
  {
    id: 10,
    title: "Motorola Edge+",
    price: 699,
    inStock: true,
    category: "smartphones",
  },
  // Laptops
  {
    id: 11,
    title: "MacBook Pro",
    price: 1299,
    inStock: true,
    category: "laptops",
  },
  {
    id: 12,
    title: "Dell XPS 15",
    price: 1199,
    inStock: true,
    category: "laptops",
  },
  {
    id: 13,
    title: "HP Spectre x360",
    price: 1099,
    inStock: false,
    category: "laptops",
  },
  {
    id: 14,
    title: "Lenovo ThinkPad X1 Carbon",
    price: 999,
    inStock: true,
    category: "laptops",
  },
  {
    id: 15,
    title: "Asus ZenBook Pro Duo",
    price: 1499,
    inStock: true,
    category: "laptops",
  },
  {
    id: 16,
    title: "Acer Predator Helios 300",
    price: 1099,
    inStock: false,
    category: "laptops",
  },
  {
    id: 17,
    title: "Microsoft Surface Laptop 4",
    price: 1299,
    inStock: true,
    category: "laptops",
  },
  {
    id: 18,
    title: "Razer Blade 15",
    price: 1699,
    inStock: true,
    category: "laptops",
  },
  {
    id: 19,
    title: "Samsung Galaxy Book Pro",
    price: 1199,
    inStock: false,
    category: "laptops",
  },
  { id: 20, title: "LG Gram", price: 999, inStock: true, category: "laptops" },
  // Tablets
  { id: 21, title: "iPad Pro", price: 799, inStock: true, category: "tablets" },
  {
    id: 22,
    title: "Samsung Galaxy Tab S7",
    price: 649,
    inStock: true,
    category: "tablets",
  },
  {
    id: 23,
    title: "Google Pixel Slate",
    price: 499,
    inStock: false,
    category: "tablets",
  },
  {
    id: 24,
    title: "Microsoft Surface Pro 7",
    price: 899,
    inStock: true,
    category: "tablets",
  },
  {
    id: 25,
    title: "Amazon Fire HD 10",
    price: 199,
    inStock: true,
    category: "tablets",
  },
  {
    id: 26,
    title: "Huawei MatePad Pro",
    price: 599,
    inStock: false,
    category: "tablets",
  },
  {
    id: 27,
    title: "Lenovo Tab P11 Pro",
    price: 499,
    inStock: true,
    category: "tablets",
  },
  {
    id: 28,
    title: "Asus ZenPad 3S 10",
    price: 299,
    inStock: true,
    category: "tablets",
  },
  {
    id: 29,
    title: "Microsoft Surface Go 2",
    price: 399,
    inStock: false,
    category: "tablets",
  },
];

const createTable = (productData) => {
  const tableElement = document.createElement("table");
  const tableHead = document.createElement("thead");
  const tableBody = document.createElement("tbody");

  const headers = Object.keys(productData[0]);
  tableHead.appendChild(createHeaderRow(headers));

  productData.forEach((rowData) => {
    tableBody.appendChild(createProductRow(rowData));
  });

  tableElement.appendChild(tableHead);

  tableElement.appendChild(tableBody);

  return tableElement;
};

const createProductRow = (product) => {
  const tr = document.createElement("tr");
  Object.values(product).forEach((value) => {
    const td = document.createElement("td");
    td.textContent = value;
    tr.appendChild(td);
  });

  return tr;
};

const createHeaderRow = (columnNames) => {
  const tr = document.createElement("tr");

  columnNames.forEach((columnName) => {
    const th = document.createElement("th");
    th.textContent = columnName[0].toUpperCase() + columnName.slice(1);

    const searchUp = document.createElement("span");
    searchUp.textContent = "🔼";

    const searchDown = document.createElement("span");
    searchDown.textContent = "🔽";

    searchUp.onclick = () => sortDataBy(columnName, "ASC");
    searchDown.onclick = () => sortDataBy(columnName, "DESC");

    th.appendChild(searchDown);
    th.appendChild(searchUp);

    tr.appendChild(th);
  });

  return tr;
};

const sortDataBy = (columnName, direction) => {
  const sosrtdASCData = [
    ...data.sort((a, b) => (a[columnName] > b[columnName] ? 1 : -1)),
  ];
  const sosrtdDESCData = [
    ...data.sort((a, b) => (a[columnName] < b[columnName] ? 1 : -1)),
  ];

  renderTable(direction === "ASC" ? sosrtdASCData : sosrtdDESCData);
};

const renderTable = (productData) => {
  const sortsbletTableElement = document.getElementById("sortableTable");
  sortsbletTableElement.innerHTML = "";
  sortsbletTableElement.appendChild(createTable(productData));
};

renderTable(data);
