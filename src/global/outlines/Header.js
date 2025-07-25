import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { MdHome, MdDraw, MdLogin, MdLogout } from 'react-icons/md';
import useUserInfo from '../hooks/useUserInfo';
import useLogout from '../hooks/useLogout';
import color from '../styles/color';
import fontsize from '../styles/fontsize';

const { primary, light, dark } = color;
const { big, extraBig } = fontsize;

const StyledHeader = styled.header`
  height: 90px;
  display: flex;
  background: ${primary};
  color: ${light};
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;

  .left,
  .right {
    display: flex;
    flex-grow: 1;
  }

  .right {
    justify-content: right;

    .userinfo {
      line-height: 3rem;
    }
  }

  a {
    font-size: ${big};
    color: ${light};
    display: flex;
    align-items: center;

    &.on {
      color: ${dark};
    }

    svg {
      font-size: ${extraBig};
    }
  }

  a + a {
    margin-left: 25px;
  }
`;

const Header = () => {
  const [isLogin, loggedMember] = useUserInfo();
  const onLogout = useLogout();

  return (
    <StyledHeader className="layout-width">
      <div className="left">
        <NavLink to="/">
          <MdHome />
          <span>메인으로</span>
        </NavLink>
        <NavLink
          to="/draw"
          className={({ isActive }) => classNames({ on: isActive })}
        >
          <MdDraw />
          <span>낙서하기</span>
        </NavLink>
      </div>
      <div className="right">
        {isLogin ? (
          <>
            <span className='userinfo'>{loggedMember.name}({loggedMember.email})님, </span>
            <a onClick={onLogout}>
              <MdLogout />
              <span>로그아웃</span>
            </a>
          </>
        ) : (
          <NavLink
            to="/member/login"
            className={({ isActive }) => classNames({ on: isActive })}
          >
            <MdLogin />
            <span>로그인</span>
          </NavLink>
        )}
      </div>
    </StyledHeader>
  );
};

export default React.memo(Header);
