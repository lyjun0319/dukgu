import React, {useRef, useState} from 'react';
import { bucket, region} from "../../libs/aws/awsSetting";
import AWS, { S3 } from "aws-sdk";
import {accessKeyId, secretAccessKey} from "../../common/constant";
import {getPortfolio, writePortfolio} from "../../libs/firebase/firebase";
import {useQuery} from "react-query";


const PortfolioWrite = () => {
  const [products, setProducts] = useState({});
  const {isLoading, error, data} = useQuery(["portfolio"],getPortfolio);

  const thumbRef = useRef(null);

  const handelChange = e =>{
    const {name, type, value, files} = e.target;


    if(type === "file"){
      const file = files[0];
      const s3 = new AWS.S3({
        accessKeyId,
        secretAccessKey,
        region,
      });

      const params = {
        Bucket: bucket,
        Key: file.name,
        Body: file,
        ACL: 'public-read', // 설정에 따라 이미지를 공개로 설정할 수 있습니다.
      };


      s3.upload(params, (err, data)=>{
        if(err){
          console.error(err)
        }else{
          setProducts({
            ...products,
            thumb:data.Location
          });
        }
      })
      return false;
    }

    setProducts({
      ...products,
      [name] : value,
    })
  }

  const handelSubmit = () => {

    const imgW = thumbRef.current?.clientWidth;
    const imgH = thumbRef.current?.clientHeight;

    let product;
    if(imgW - imgH > 80) {
      product = {
        ...products,
        thumbWidth : true
      }
    }else{
      product = {
        ...products,
        thumbWidth : false
      }
    }

    if(products?.skill){
      const splitSkill = products?.skill.split(",");
      product = {
        ...product,
        skill:splitSkill
      }
    }

    writePortfolio(product, data.length)
      .then(()=>{
        alert("제품이 등록되 었습니다.");
        window.location.reload();
      });
  }

  return (
    <div className="write-box">
      <form action="">
        <ul>
          <li>
            <label htmlFor="name">프로잭트 명</label>
            <input
              type="text"
              name="name"
              id="name"
              value={products.name ?? ""}
              placeholder="프로젝트 이름"
              onChange={handelChange}
            />
          </li>
          <li>
            <label htmlFor="day">프로잭트 기간</label>
            <input
              type="text"
              id="day"
              name='day'
              value={products.day ?? ""}
              placeholder="YYYYMM - YYYYMM"
              onChange={handelChange}
            />
          </li>
          <li>
            <p className="label-tt">프로잭트 썸네일</p>
            <label className={products?.thumb ? "thumb" : "thumb-box"} htmlFor="thumb" >
              {products?.thumb && <img src={products.thumb} ref={thumbRef} alt=""/>}
            </label>
            <input
              type="file"
              id="thumb"
              name='thumb'
              placeholder="프로젝트 썸네일"
              onChange={handelChange}
              className="input-file"
            />
          </li>
          <li>
            <label htmlFor="link">프로잭트 URL</label>
            <input
              type="text"
              name="link"
              value={products.link ?? ""}
              id="link"
              placeholder="프로젝트 URL"
              onChange={handelChange}
            />
          </li>
          <li>
            <label htmlFor="company">회사</label>
            <input
              type="text"
              name="company"
              id="company"
              value={products.company ?? ""}
              placeholder="회사"
              onChange={handelChange}
            />
          </li>
          <li>
            <label htmlFor="skill">사용한 스킬</label>
            <input
              type="text"
              name="skill"
              id="skill"
              value={products.skill ?? ""}
              placeholder="프로젝트에 사용한 스킬"
              onChange={handelChange}
            />
          </li>
          <li>
            <label htmlFor="desc">프로잭트 소개</label>
            <textarea
              name="desc"
              id="desc"
              value={products.desc ?? ""}
              onChange={handelChange}
            >
            </textarea>
          </li>
          <li>
            <label htmlFor="work">프로잭트 담당</label>
            <textarea
              name="work"
              id="work"
              value={products.work ?? ""}
              onChange={handelChange}
            >
            </textarea>
          </li>
        </ul>
      </form>
      <div className="btn-box">
        <button type="button" className="btn-save" onClick={handelSubmit}>저장</button>
      </div>
    </div>
  );
};

export default PortfolioWrite;