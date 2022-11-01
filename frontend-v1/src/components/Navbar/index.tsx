import React, { useState, useEffect } from "react";
import { LinkButton, LogoText, StyledAnchor, StyledNav } from "./styles";
import { Space } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    if (router.isReady) {
      setIsLogin(router.pathname === "/login");
    }
  }, [router.isReady]);
  return (
    <StyledNav $isLogin={isLogin}>
      <LogoText>BLOCKTOWN</LogoText>
      {router.pathname !== "/login" && (
        <Space size="large">
          <Link href="/">
            <StyledAnchor>
              <LinkButton>Home</LinkButton>
            </StyledAnchor>
          </Link>
          <Link href="/results">
            <StyledAnchor>
              <LinkButton>Your Votes</LinkButton>
            </StyledAnchor>
          </Link>
        </Space>
      )}
    </StyledNav>
  );
};

export default Navbar;
