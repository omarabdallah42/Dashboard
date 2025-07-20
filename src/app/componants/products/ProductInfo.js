"use client";
import { Dialog, DialogContent, Box, TextField, Autocomplete } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Products } from '../../store/productsState';
import { useProfileStore } from '../../store/profile';
import { useNotificationStore } from '../../store/notification ';
const ProductInfoDialog = ({ typeEdite, open, onClose, onSave, ItemEdite }) => {
  const { products, tableData,setTableData,setProducts ,ActiveAlert,SetActiveAlert } = Products();
  const {Admaininfo} = useProfileStore();
  const {setNotification} = useNotificationStore();
  const [src, setSrc] = useState('/pngwing.com (12).png');
  const [showSrc, setShowSrc] = useState([
    { src: '/pngwing.com (13).png' },
    { src: '/pngwing.com (14).png' },
    { src: '/pngwing.com (15).png' },

  ]);
  const [itemEditValue, setItemEditValue] = useState({
    user: Admaininfo.name,
    count:0,
    time: new Date().toLocaleString(),
    src: '/pngwing.com (12).png',
    productSrc: '/pngwing.com (12).png',
    productTitle:'',
    usersrc:'',
    id: 0,
    title: '',
    count: 0,
    price: null,
    category: '',
    description: '',
    state:'',
    time: new Date().toLocaleString(),
  });
  useEffect(() => {
    if(typeEdite === 'edite'){
         if (ItemEdite) {
      setItemEditValue(ItemEdite);
      setSrc(ItemEdite.src);
    };
    }else{
   setItemEditValue({
      usersrc: '/customer3.jpeg',
      user: Admaininfo.name,
      src: '/pngwing.com (12).png',
      id: 0,
      title: '',
      count: 1,
      category: itemEditValue.category,
      productSrc: src,
      price: null,
      description: '',
      productTitle: itemEditValue.title,
      state: 'Active',

    time: new Date().toLocaleString(),
});
    };
  }, [ItemEdite,typeEdite]);
  const handleSwap = (clickedSrc, index) => {
    const newShowSrc = [...showSrc];
    const oldSrc = src; // original large image
    newShowSrc[index].src = oldSrc;
    setShowSrc(newShowSrc);
    setItemEditValue({ ...itemEditValue, src: clickedSrc , productSrc: clickedSrc});
    setSrc(clickedSrc);
  };
  const ShowSrcImage = showSrc.map((item, index) => (
    <div key={index}>
      <img
        src={item.src}
        onClick={() => {
          handleSwap(item.src, index);
        }}
        alt="sub product"
        style={{ cursor: 'pointer', width: '60px', margin: '5px' }}
      />
    </div>
  ));
  const handleSave = () => {
    if(typeEdite === 'edite'){
    const originalItem = products.find((item) => item.id === itemEditValue.id);
    if (
      originalItem &&
      itemEditValue.category === originalItem.category &&
      itemEditValue.title === originalItem.title &&
      itemEditValue.description === originalItem.description &&
      itemEditValue.price === originalItem.price &&
      itemEditValue.src === originalItem.src
    ) {
      SetActiveAlert({ type: 'error', message: 'No changes were made', show: true });
    }else{
const updatedProducts = products.map((item) =>
      item.id === itemEditValue.id ? itemEditValue : item
); 
 setProducts(updatedProducts);
    if (onSave) onSave(itemEditValue);
      onClose();
      setNotification({message:`new update in  ${itemEditValue.title} product`});
      SetActiveAlert({type: 'success', message: 'Product updated successfully',show:true});
  };
    }else if(typeEdite === 'add'){
      if( itemEditValue.title === '' || itemEditValue.price === null || itemEditValue.category === '' || itemEditValue.description === '' ){
        SetActiveAlert({ type: 'error', message: 'Please fill all the fields', show: true });

      } else if(itemEditValue.title.trim() || itemEditValue.category.trim()  || itemEditValue.description.trim()  ){
         setTableData([itemEditValue,...tableData]);
      if (onSave) onSave(itemEditValue);
            setNotification({message:`new Add product ${itemEditValue.title} product`});

      onClose();
      SetActiveAlert({type: 'success', message: 'Product added successfully',show:true});
      }
    }};
  useEffect(() => {
  if (ActiveAlert.show) {
    const timer = setTimeout(() => {
      SetActiveAlert({ ...ActiveAlert, show: false });
    }, 3000);
    return () => clearTimeout(timer); // Cleanup
  };
}, [ActiveAlert.show]);
  return (
    <Dialog
      open={open}
      onClose={(event, reason) => {
        if (reason === 'backdropClick' || reason === 'escapeKeyDown') {
          onClose();
        };
      }}
      maxWidth="md"
      fullWidth
    >
      <DialogContent
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          p: 0,
          color: 'white',
          background: '#1d1b1b',
          boxShadow: '0 0 50px rgba(255, 255, 255, 0.1)',
        }}
        onClick={(e) => e.stopPropagation()} // prevent dialog close on inside click
      >
        <div className="ProductInfo">
          <div className="ProductInfo-Details">
            <div className="ProductInfo-Details-show-inputs">
              <div className="Title">
                <h2>Enter Product Name</h2>
                <Box component="form" autoComplete="off">
                  <TextField
                    type="text"
                    value={itemEditValue.title}
                    onChange={(e) =>
                      setItemEditValue({
                        ...itemEditValue,
                        title: e.target.value,
                      })
                    }
                    className="inputs"
                    id="outlined-basic"
                    label="Product Name"
                    variant="outlined"
                  />
                </Box>
              </div>
            </div>
            <div className="TextArea">
              <h2>Description Product</h2>
              <textarea
                onChange={(e) =>
                  setItemEditValue({ ...itemEditValue, description: e.target.value })
                }
                value={itemEditValue.description}
                rows={4}
              ></textarea>
            </div>
            <div className="ProductInfo-Details-show-categories" style={{ display: 'flex', gap: '4%' }}>
              <Autocomplete
                disablePortal
                options={['Shoes', 'Shirt', 'Jacket', 'Watch', 'Jeans', 'Glass']}
                sx={{ width: '48%' }}
                value={itemEditValue.category}
                onChange={(event, newValue) => {
                  setItemEditValue({ ...itemEditValue, category: newValue || '' });
                }}
                renderInput={(params) => <TextField {...params} label="Category" />}
              />
              <Box component="form" sx={{ width: '48%' }} noValidate autoComplete="off">
                <TextField
                  type="number"
                  onChange={(e) => {
                    setItemEditValue({ ...itemEditValue, price: Number(e.target.value)});
                  }}
                  value={itemEditValue.price }
                  id="outlined-basic"
                  label="Price"
                  variant="outlined"
                  fullWidth
                />
              </Box>
            </div>
          </div>
          <div className="ProductInfo-Image" style={{ marginLeft: '20px' }}>
            <div className="Main-Image">
              <img
                src={itemEditValue.src || src}
                alt="main product"
/>
            </div>
            <div className="Sub-Images" style={{ display: 'flex', marginTop: '10px' }}>
              {ShowSrcImage}
            </div>
            <div className="ProductInfo-Buttons" style={{ marginTop: '20px' }}>
              <button onClick={handleSave} style={{ marginRight: '10px' }}>
                {typeEdite === 'add' ? 'add' : 'Update'}
              </button>
              <button onClick={onClose}>Close</button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default ProductInfoDialog;