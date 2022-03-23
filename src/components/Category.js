import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function Category({ categories, setChosenCategory }) {
  const [value, setValue] = useState(categories[0].value);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setChosenCategory(newValue);
  };
  return (
    <div className="Category">
      <Tabs value={value} onChange={handleChange}>
        {categories.map((it) => (
          <Tab label={it.name} value={it.value} key={it.name} />
        ))}
      </Tabs>
    </div>
  );
}
