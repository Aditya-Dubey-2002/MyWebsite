import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LanguageIcon from '@mui/icons-material/Language';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';
import BuildIcon from '@mui/icons-material/Build';
import BasicTable from './LanguagesContent';

// Components for different categories


export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderContent = () => {
    return <BasicTable index={value} />
  };

  return (
    <div >
      <Tabs variant="scrollable"
  scrollButtons="auto" value={value} onChange={handleChange} color="secondary" style={{alignItems:'center'}} aria-label="icon label tabs example">
        <Tab icon={<LanguageIcon />} label="LANGUAGES" />
        <Tab icon={<WebIcon />} label="WEB DEVELOPMENT" />
        <Tab icon={<StorageIcon />} label="DATABASES" />
        <Tab icon={<BuildIcon />} label="TOOLS" />
      </Tabs>
      {renderContent()}
    </div>
  );
}
