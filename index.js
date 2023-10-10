const Orders = [
    {
        'productName': 'Javascript Tutorial',
        'productNumber': '112233',
        'paymentStatus': 'Due',
        'status': 'Pending'
    },
    {
        'productName': 'CSS & HTML Tutorial',
        'productNumber': '112233',
        'paymentStatus': 'Refunded',
        'status': 'Declined'
    },
    {
        'productName': 'React Js Tutorial',
        'productNumber': '112233',
        'paymentStatus': 'Due',
        'status': 'Pending'
    },
    {
        'productName': 'Javascript Tutorial',
        'productNumber': '112233',
        'paymentStatus': 'Paid',
        'status': 'Active'
    },
];

Orders.forEach(order => {
    const tr = document.createElement("tr");
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${
            order.status === "Declined"
            ? "danger"
            : order.status === "Pending"
            ? "warning"
            : "primary"
        }">${order.status}</td>
        <td class="primary" style="cursor: pointer;">Details</td>
    `;
    tr.innerHTML = trContent;

    document.querySelector("table tbody").appendChild(tr);
});

const closeBtn = document.getElementById("close-btn");
const menuBtn = document.getElementById("menu-btn");
const sideMenu = document.querySelector("aside");

const darkMode = document.querySelector(".dark-mode");

menuBtn.addEventListener("click", () => {
    console.log("menuBtn clicked")
    sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    console.log("closeBtn clicked")
    sideMenu.style.display = "none";
});

darkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode-variables");
    darkMode.querySelector(".fa-regular.fa-moon").classList.toggle("active");
    darkMode.querySelector(".fa-solid.fa-moon").classList.toggle("active");
});