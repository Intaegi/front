import React from "react";
import "./style.css";
import { styled, alpha } from "@mui/material/styles";

export default function Register() {
  return (
    <div className="element">
      <div className="element-x">
        <div className="overlap">
          <footer className="footer">
            <div className="overlap-group">
              <div className="text-wrapper">テキスト</div>
              <div className="text-wrapper-2">テキスト</div>
              <div className="text-wrapper-3">テキスト</div>
              <div className="text-wrapper-4">テキスト</div>
              <p className="contact-team-hola">
                CONTACT
                <br />
                TEAM.HOLA.OFFICIAL@GMAIL.COM
                <br />
                COPYRIGHT HOLA. ALL RIGHTS RESERVED
              </p>
              <div className="text-wrapper-5">MY-TOY</div>
            </div>
          </footer>
          <div className="to-top-btn">
            {/* <Icon
              className="icon-instance"
              icon={<ExpandLessFilled className="expand-less-filled" color="#FFF500" />}
              size="large"
              type="SVG-icon"
            /> */}
            <div className="min-width" />
          </div>
        </div>
        <div className="text-input-content">
          <div className="head-title-underline">
            <div className="overlap-group-2">
              {/* <DividerHorizontal className="head-title-underline" divider="image.svg" /> */}
              <div className="text-input">
                <div className="text-wrapper-6">タイトル</div>
              </div>
              <div className="input">
                <div className="content">
                  <div className="text-wrapper-7">タイトル</div>
                </div>
              </div>
            </div>
          </div>
          <div className="register-button">
            <div className="base-wrapper">
              <div className="base">
                <button className="button-6">登録</button>
              </div>
            </div>
            <button className="cancel-button">
              <button className="button-wrapper">
                <button className="button-7">CANCEL</button>
              </button>
            </button>
          </div>
          <div className="group">
            <div className="div-wrapper">
              <div className="text-wrapper-8">入力</div>
            </div>
            <div className="rectangle" />
          </div>
        </div>
        <div className="select-input-content">
          <div className="divider-horizontal-wrapper">
            {/* <DividerHorizontal className="divider-horizontal-instance" divider="divider-2.svg" /> */}
          </div>
          <div className="section-input">
            <div className="select-input">
              <div className="container-wrapper">
                <div className="container">
                  <div className="min-height-2" />
                  <div className="text-wrapper-9">Label</div>
                  <div className="min-width-2" />
                  {/* <ArrowDropDownFilled className="arrow-drop-down" /> */}
                </div>
              </div>
              <div className="input-2">
                <div className="container">
                  <div className="min-height-2" />
                  <div className="text-wrapper-9">Label</div>
                  <div className="min-width-2" />
                  {/* <ArrowDropDownFilled className="arrow-drop-down" /> */}
                </div>
              </div>
              <div className="text-wrapper-10">募集ポジション</div>
              <div className="text-wrapper-11">連絡方法</div>
              <div className="text-field">
                <div className="content-wrapper">
                  <div className="content">
                    <div className="text-wrapper-7">Value</div>
                  </div>
                </div>
                <div className="label-container">
                  <div className="label">{""}</div>
                </div>
              </div>
            </div>
            <div className="select-input-2">
              <div className="input-3">
                <div className="container-2">
                  <div className="min-height-2" />
                  <div className="text-wrapper-9">Label</div>
                  <div className="min-width-2" />
                  {/* <ArrowDropDownFilled className="arrow-drop-down" /> */}
                </div>
              </div>
              <div className="text-wrapper-12">技術スタック</div>
              <div className="text-wrapper-13">募集締切日</div>
              <div className="overlap-group-3">
                <div className="text-field-2">
                  <div className="input-4">
                    <div className="content">
                      <div className="text-wrapper-7">Value</div>
                    </div>
                  </div>
                  <div className="label-container">
                    <div className="label">{""}</div>
                  </div>
                </div>
                <img className="img" alt="Select input" src="select-input-calendar-icon.svg" />
              </div>
            </div>
            <div className="select-input-3">
              <div className="container-wrapper">
                <div className="container">
                  <div className="min-height-2" />
                  <div className="text-wrapper-9">Label</div>
                  <div className="min-width-2" />
                  {/* <ArrowDropDownFilled className="arrow-drop-down" /> */}
                </div>
              </div>
              <div className="input-2">
                <div className="container">
                  <div className="min-height-2" />
                  <div className="text-wrapper-9">Label</div>
                  <div className="min-width-2" />
                  {/* <ArrowDropDownFilled className="arrow-drop-down" /> */}
                </div>
              </div>
              <div className="text-wrapper-10">進行方式</div>
              <div className="text-wrapper-11">進行期間</div>
            </div>
            <div className="select-input-4">
              <div className="container-wrapper">
                <div className="container">
                  <div className="min-height-2" />
                  <div className="text-wrapper-9">スタディ/プロジェクト</div>
                  <div className="min-width-2" />
                  {/* <ArrowDropDownFilled className="arrow-drop-down" /> */}
                </div>
              </div>
              <div className="input-2">
                <div className="container">
                  <div className="min-height-2" />
                  <div className="text-wrapper-9">Label</div>
                  <div className="min-width-2" />
                  {/* <ArrowDropDownFilled className="arrow-drop-down" /> */}
                </div>
              </div>
              <div className="text-wrapper-10">募集区分</div>
              <div className="text-wrapper-11">募集人員</div>
            </div>
          </div>
        </div>
        <div className="head">
          <div className="head-title-icon">
            <img className="img-2" alt="Element" src="1.png" />
            <div className="min-width-3" />
          </div>
          <div className="head-title-text">プロジェクトに関して紹介してください</div>
        </div>
        <div className="head-title">
          <div className="head-title-icon">
            <img className="img-3" alt="Element" src="image.png" />
            <div className="min-width-3" />
          </div>
          <div className="head-title-text-2">プロジェクトの基本情報を入力してください。</div>
        </div>
        {/* <Header MYToy="MY-TOY.svg" className="header-instance" line="line-1-2.svg" /> */}
      </div>
    </div>
  );
}
