import React, { useState } from "react";
import TemplateCreate from "./TemplateCreate";
import TitleLocation from "./TitleLocation";
import { InputTitle } from "../globals/Input";
import GoogleMapEmbed from "./GoogleMapEmbed";
import TitleBorder from "../globals/TitleBorder";

export default function LocationInformation({
  wedding_date,
  timezone,
  wedding_time_start,
  wedding_time_end,
  wedding_address,
  wedding_map,
  reception_date,
  reception_time_start,
  reception_time_end,
  reception_address,
  reception_map,
  onNext,
  setValue,
}) {
  return (
    <TemplateCreate onNext={onNext}>
      <TitleBorder>Resepsi</TitleBorder>
      <InputTitle
        required
        className={"my-3"}
        type="text"
        label={"Embed Google Maps*"}
        placeholder="Embed google maps"
        value={reception_map}
        onChange={(e) => setValue({ reception_map: e.target.value })}
      />
      <InputTitle
        required
        value={reception_address}
        onChange={(e) => setValue({ reception_address: e.target.value })}
        className={"my-3"}
        label={"Nama Lokasi*"}
        placeholder="Rumah/Gedung.."
      />
      <div className="flex items-start gap-3 my-3 md:flex-row flex-col">
        <InputTitle
          required
          value={reception_date}
          onChange={(e) => setValue({ reception_date: e.target.value })}
          type="date"
          label={"Tanggal Acara*"}
        />
        <InputTitle
          required
          value={timezone}
          onChange={(e) => setValue({ timezone: e.target.value })}
          placeholder="WIB"
          label={"Tampilan Zona Waktu*"}
        />
      </div>
      <div className="flex items-start gap-3 my-3 md:flex-row flex-col">
        <InputTitle
          required
          value={reception_time_start}
          onChange={(e) => setValue({ reception_time_start: e.target.value })}
          type="time"
          label={"Jam Mulai Acara*"}
        />
        <InputTitle
          required
          value={reception_time_end}
          onChange={(e) => setValue({ reception_time_end: e.target.value })}
          type="time"
          label={"Jam Selesai Acara*"}
        />
      </div>
      <TitleBorder className={"mt-6"}>Akad</TitleBorder>
      <InputTitle
        required
        value={wedding_map}
        onChange={(e) => setValue({ wedding_map: e.target.value })}
        className={"my-3"}
        label={"Embed Google Maps*"}
        placeholder="Embed google maps"
      />
      <InputTitle
        required
        value={wedding_address}
        onChange={(e) => setValue({ wedding_address: e.target.value })}
        className={"my-3"}
        label={"Nama Lokasi*"}
        placeholder="Rumah/Gedung.."
      />
      <div className="flex items-start gap-3 my-3 md:flex-row flex-col">
        <InputTitle
          required
          value={wedding_date}
          onChange={(e) => setValue({ wedding_date: e.target.value })}
          type="date"
          label={"Tanggal Acara*"}
        />
      </div>
      <div className="flex items-start gap-3 my-3 md:flex-row flex-col">
        <InputTitle
          required
          value={wedding_time_start}
          onChange={(e) => setValue({ wedding_time_start: e.target.value })}
          type="time"
          label={"Jam Mulai Acara*"}
        />
        <InputTitle
          required
          value={wedding_time_end}
          onChange={(e) => setValue({ wedding_time_end: e.target.value })}
          type="time"
          label={"Jam Selesai Acara*"}
        />
      </div>
    </TemplateCreate>
  );
}
