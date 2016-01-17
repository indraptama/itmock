
const childHidden = (el) => {
  const elHidden = document.querySelectorAll(el);
  for (let i = 0; i < elHidden.length; i++) {
    elHidden[i].style.display = 'none';
  }
};


const Tabs = () => {
  const Tab = document.querySelector('.Tab');
  const TabAchor = Tab.querySelector('.TabAchor');
  const TabContent = Tab.querySelector('.TabContent');


}

export default Tabs;
