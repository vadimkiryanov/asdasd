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
    <>
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
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
            </a>
            {/* Кнопка Twitter */}
            <a className="btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-orange-500">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            {/* Блок Telegram с подсказкой */}
            <div className={`tooltip-bottom ${isCopied && typeElem === "telegram" ? "tooltip tooltip-open" : ""}`} data-tip="URL is copied :)">
              <a onClick={() => emailHandlerClick("@vadosjs", "telegram")} className="btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-orange-500">
                  <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
                </svg>
              </a>
            </div>
            {/* Блок Email с подсказкой */}
            <div className={`tooltip-bottom ${isCopied && typeElem === "email" ? "tooltip tooltip-open" : ""}`} data-tip="URL is copied :)">
              <button onClick={() => emailHandlerClick("19vadik99@gmail.com", "email")} className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
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
    </>
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
