let ft_list = document.getElementById("ft_list");

const create = () => {
  let text = prompt("Please Enter TODO LIST :");
  if (text.length === 0) return;
  
  const timestamp = new Date().getTime();
  document.cookie = `${timestamp}=${encodeURIComponent(text)}; path=/`;
  
  let item = document.createElement("div");
  item.innerHTML = text;
  item.onclick = () => deleteItem(item, timestamp);
  
  ft_list.appendChild(item);
};

const deleteItem = (item, timestamp) => {
  const check = confirm("Do you want to delete?");
  if (check) {
    item.remove();
    document.cookie = `${timestamp}=; expires=Sun, 14 Nov 2004 00:00:00 UTC; path=/`;
  }
};

const loadItems = () => {
  const cookies = document.cookie.split("; ");
  cookies.forEach((element) => {
    let [key, ...valueParts] = element.split("=");

    let text = decodeURIComponent(valueParts.join("="));
    
    let item = document.createElement("div");
    item.innerHTML = text;
    item.onclick = () => deleteItem(item, key);
    
    ft_list.appendChild(item);
  });
};

loadItems();