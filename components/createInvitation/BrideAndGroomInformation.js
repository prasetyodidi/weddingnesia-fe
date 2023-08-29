import React, { useEffect, useState } from "react";
import TemplateCreate from "./TemplateCreate";
import Image from "next/image";
import { FiFile, FiFolder } from "react-icons/fi";
import { InputLeftWithTitle, InputTitle } from "../globals/Input";
import InputProfile from "../globals/InputProfile";
import ContainerPart from "./ContainerPart";
import Button from "../globals/Button";
import { buttonStyle } from "@/utils/enum";
import { VscMention } from "react-icons/vsc";

export default function BrideAndGroomInformation({
  groom_name,
  groom_avatar,
  groom_fullname,
  groom_instagram,
  bride_avatar,
  bride_name,
  bride_fullname,
  bride_instagram,
  setValue,
  onNext,
}) {
  const [fatherGroom, setFatherGroom] = useState("");
  const [motherGroom, setMotherGroom] = useState("");
  const [fatherBride, setFatherBride] = useState("");
  const [motherBride, setMotherBride] = useState("");
  const [orderGroom, setOrderGroom] = useState("");
  const [orderBride, setOrderBride] = useState("");
  useEffect(() => {
    setValue({
      groom_info: `${orderGroom} dari Bapak ${fatherGroom} dan Ibu ${motherGroom}`,
    });
  }, [fatherGroom, motherGroom, orderGroom]);
  useEffect(() => {
    setValue({
      bride_info: `${orderBride} dari Bapak ${fatherBride} dan Ibu ${motherBride}`,
    });
  }, [fatherBride, motherBride, orderBride]);
  return (
    <TemplateCreate onNext={onNext}>
      <div className="flex justify-center gap-6 md:flex-row flex-col">
        <ContainerPart>
          <InputProfile groom_avatar={groom_avatar} setValue={setValue} isMan />
          <div className="flex flex-col space-y-3 my-1 md:my-3 py-3 md:py-6 border-b border-black/10">
            <InputTitle
              required
              value={groom_fullname}
              onChange={(e) => setValue({ groom_fullname: e.target.value })}
              label="Nama Lengkap Pria*"
              placeholder="Nama Lengkap Pria"
            />
            <InputTitle
              required
              value={groom_name}
              onChange={(e) => setValue({ groom_name: e.target.value })}
              label="Nama Panggilan Pria*"
              placeholder="Nama Panggilan Pria"
            />
          </div>
          <div className="flex flex-col space-y-3 my-1 md:my-3 pb-3 md:pb-6 pt-3 border-b border-black/10">
            <InputTitle
              required
              value={fatherGroom}
              onChange={(e) => setFatherGroom(e.target.value)}
              label="Nama Ayah Pria*"
              placeholder="Nama Ayah Pria"
            />
            <InputTitle
              required
              value={motherGroom}
              onChange={(e) => setMotherGroom(e.target.value)}
              label="Nama Ibu Pria*"
              placeholder="Nama Ibu Pria"
            />
          </div>

          <div className="md:pb-6 pb-3 mb-3 pt-3 md:mb-6 border-b border-black/10">
            <InputTitle
              required
              value={orderGroom}
              onChange={(e) => setOrderGroom(e.target.value)}
              label="Urutan Anak Pria*"
              placeholder="Anak bungsu"
            />
          </div>
          <InputLeftWithTitle
            required
            left={<VscMention className="text-xl" />}
            label={"Instagram Pria*"}
            placeholder="Instagram Pria"
            value={groom_instagram}
            onChange={(e) => setValue({ groom_instagram: e.target.value })}
          />
        </ContainerPart>

        <ContainerPart>
          <InputProfile bride_avatar={bride_avatar} setValue={setValue} />
          <div className="flex flex-col space-y-3 my-1 md:my-3 py-3 md:py-6 border-b border-black/10">
            <InputTitle
              required
              label="Nama Lengkap Wanita*"
              placeholder="Nama Lengkap Wanita"
              value={bride_fullname}
              onChange={(e) => setValue({ bride_fullname: e.target.value })}
            />
            <InputTitle
              required
              label="Nama Panggilan Wanita*"
              placeholder="Nama Panggilan Wanita"
              value={bride_name}
              onChange={(e) => setValue({ bride_name: e.target.value })}
            />
          </div>
          <div className="flex flex-col space-y-3 my-1 md:my-3 pb-3 md:pb-6 pt-3 border-b border-black/10">
            <InputTitle
              required
              label="Nama Ayah Wanita*"
              placeholder="Nama Ayah Wanita"
              value={fatherBride}
              onChange={(e) => setFatherBride(e.target.value)}
            />
            <InputTitle
              required
              label="Nama Ibu Wanita*"
              placeholder="Nama Ibu Wanita"
              value={motherBride}
              onChange={(e) => setMotherBride(e.target.value)}
            />
          </div>

          <div className="md:pb-6 pb-3 mb-3 pt-3 md:mb-6 border-b border-black/10">
            <InputTitle
              required
              label="Urutan Anak Wanita*"
              placeholder="Anak pertama"
              value={orderBride}
              onChange={(e) => setOrderBride(e.target.value)}
            />
          </div>
          <InputLeftWithTitle
            required
            left={<VscMention className="text-xl" />}
            label={"Instagram Wanita*"}
            placeholder="Instagram Wanita"
            value={bride_instagram}
            onChange={(e) => setValue({ bride_instagram: e.target.value })}
          />
        </ContainerPart>
      </div>
    </TemplateCreate>
  );
}
