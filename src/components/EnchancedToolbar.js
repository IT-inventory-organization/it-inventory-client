import React from "react";
import { Button, Grid, Stack, OutlinedInput } from "@mui/material";
import styles from "../styles/dashboard/index.module.scss";
import classnames from "classnames";
import { ReactComponent as IcSearch } from "../assets/icons/ic_search.svg";

function EnchancedToolbar(props) {
  const { handleOpenModal, handleChangeSearch } = props;
  return (
    <Grid className={styles.enchanced_toolbar} container>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <OutlinedInput
          className={styles.enchanced_toolbar_search}
          startAdornment={<IcSearch />}
          onChange={(e) => handleChangeSearch(e)}
          placeholder="Cari"
        />
      </Grid>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <Stack spacing={1} justifyContent="flex-end" direction="row">
          <Button
            className={classnames(
              styles.enchanced_toolbar_btn,
              styles.btn_create
            )}
            onClick={() => handleOpenModal()}
            variant="contained"
          >
            Create New
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default React.memo(EnchancedToolbar);
