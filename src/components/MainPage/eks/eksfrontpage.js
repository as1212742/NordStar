/** @format */

import Stack from "aws-northstar/layouts/Stack";
import Box from "aws-northstar/layouts/Box";
import Forms1 from "./forms/forms";
import Forms2 from "./forms/Secondform";
import Forms3 from "./forms/ThirdForm";
import { DataContext } from "../../context/Provider";
import { useContext } from "react";

const MainContent = () => {
  const { PageState, CreatePageState } = useContext(DataContext);

  const Eksfrontpage = () => {
    switch (PageState.EksFileState.forms) {
      case 0:
        return <Forms1 />;
        break;

      case 1:
        return <Forms2 />;
        break;

      case 2:
        return <Forms3 />;
        break;

      default:
        break;
    }
  };

  return (
    <Box bgcolor="grey.300" width="100%" height="1000px">
      <Stack>
        <Eksfrontpage />
      </Stack>
    </Box>
  );
};

export default MainContent;
