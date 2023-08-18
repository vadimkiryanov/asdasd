"use client";

import Image from "next/image";
import React from "react";
import avatar from "../../assets/image/avatar.png";

export const Hero = () => {
  const [isCopied, setIsCopied] = React.useState(false);
  const [typeElem, setTypeElem] = React.useState<"telegram" | "email" | null>(null);

  const emailHandlerClick = (text: string, elemType: "telegram" | "email") => {
    copyToClipboard(text);
    setIsCopied(true);
    setTypeElem(elemType);

    setTimeout(() => {
      setIsCopied(false);
      setTypeElem(null);
    }, 3000);
  };

  return (
    // Обертка карточки
    <div className="card z-10 w-full bg-base-200 shadow-xl">
      {/* Изображение аватара */}
      <figure className="z-20 px-10 pt-10">
        <Image width={90} height={90} src={avatar} alt="Avatar" className="rounded-xl" />
      </figure>
      {/* Блок с информацией о пользователе */}
      <div className="z-20 flex flex-col items-center pb-10 text-center">
        {/* Имя пользователя */}
        <h4 className="mt-3 text-sm font-light">@vadosjs</h4>
        {/* Заголовок с именем пользователя */}
        <h2 className="z-20 text-3xl font-bold text-white">Vados Jenkins</h2>
        {/* Блок с социальными кнопками */}
        <div className="z-20 mt-3 grid grid-flow-col">
          {/* Кнопка GitHub */}
          <a href="https://github.com/vadimkiryanov" target="_blank" className="btn">
            <svg height="24" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" className="fill-orange-500">
              <path d="..."></path>
            </svg>
          </a>
          {/* Кнопка Twitter */}
          <a className="btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-orange-500">
              <path d="..."></path>
            </svg>
          </a>
          {/* Блок Telegram с подсказкой */}
          <div className={`tooltip-bottom ${isCopied && typeElem === "telegram" ? "tooltip tooltip-open" : ""}`} data-tip="URL is copied :)">
            <a onClick={() => emailHandlerClick("@vadosjs", "telegram")} className="btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-orange-500">
                <path d="..."></path>
              </svg>
            </a>
          </div>
          {/* Блок Email с подсказкой */}
          <div className={`tooltip-bottom ${isCopied && typeElem === "email" ? "tooltip tooltip-open" : ""}`} data-tip="URL is copied :)">
            <button onClick={() => emailHandlerClick("19vadik99@gmail.com", "email")} className="btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="..."></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Описание пользователя */}
        <p className="mt-3 max-w-[300px] text-gray-500">{`Hi, I'm Vados Jenkins, a Web Developer who loves to craft visually stunning websites.`}</p>
      </div>
      {/* Полупрозрачный фон */}
      <div className="bg absolute inset-0 z-0 bg-[url(https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png)] bg-[length:161px] bg-repeat opacity-[0.02]" />
    </div>
  );
};

function copyToClipboard(text: string) {
  // Создаем временный элемент textarea
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);

  // Выделяем текст в textarea
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);

  // Копируем текст в буфер обмена
  document.execCommand("copy");

  // Удаляем временный элемент textarea
  document.body.removeChild(textarea);
}
