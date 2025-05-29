'use client';

import { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../app/globals.css';
import Image from 'next/image';
import BlogCard from './components/BlogCard';
export interface mail {
  from: string;            // e.g., "John Doe" or "noreply@domain.com"
  email: string;           // e.g., "someone@example.com"
  id: string;              // Usually a unique identifier like UUID or message ID
  subject: string;         // Email subject line
  name?: string;           // Optional, so use `name?: string` or `name: string | undefined`
}
function Home() {

  const [email, setEmail] = useState('');
  const [isBtnLoading, setBtnIsLoading] = useState(false);
  const [mails, setMails] = useState([]);
  //const [coped, setCoped] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalTxt, setModalTxt] = useState('Loading...');
  const [modalTitle, setModalTitle] = useState('');
  const [countdown, setCountdown] = useState(10);

  const copyToClipboard = () => {
   // setCoped(true);
    navigator.clipboard.writeText(email);
   
  };

  const fetchEmailAndMessages = () => {
    fetch('https://tempapi-c1.vercel.app/api/new')
      .then((res) => res.json())
      .then((data) => {
        setEmail(data?.email);
      });
  };

  const handleReloadClick = () => {
    if (!email) return;
    setBtnIsLoading(true);
    fetch(`https://tempapi-c1.vercel.app/api/messages?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        setMails(data);
        setCountdown(10);
        setBtnIsLoading(false);
      });
  };

  useEffect(() => {
    fetchEmailAndMessages();
  }, []);

  useEffect(() => {
    const reloadInterval = setInterval(() => {
      if (email) {
        handleReloadClick();
      }
    }, 10000);

    const countdownTimer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 10));
    }, 1000);

    return () => {
      clearInterval(reloadInterval);
      clearInterval(countdownTimer);
    };
  }, [email]);

  const handleMailClick = (id: string, title: string) => {
    fetch(`https://tempapi-c1.vercel.app/api/message?id=${id}`)
      .then((res) => res.text())
      .then((data) => {
        setModalTxt(data);
        setModalTitle(title);
        setShowModal(true);
      });
  };

  const formatGmail = (mail: mail) => {
    const inputString = mail.from || '';
    const withoutQuotes = inputString.replace(/"/g, '');
    const parts = withoutQuotes.split('<');
    const name = parts[0]?.trim() || '';
    const emails = parts[1]?.replace('>', '').trim() || '';
    return { email: emails, name };
  };

  const modifiedHtmlContent = modalTxt?.replace(/<a(?![^>]*target="_blank")/g, '<a target="_blank"');
  const blogPosts = [
    {
      title: 'Why Use Temp Mail?',
      excerpt: 'Discover the benefits of using temp mail for privacy and security online.',
      link: '/blogs/why-use-temp-mail',
    },
    {
      title: 'Best Temp Mail Services',
      excerpt: 'A list of the top temp mail services available in 2025.',
      link: '/blogs/best-temp-mail-services',
    },
    {
      title: 'Temp Mail vs Real Email',
      excerpt: 'Understand the key differences between disposable and regular email accounts.',
      link: '/blogs/temp-mail-vs-real-email',
    },
    {
      title: 'Temp Mail for Privacy',
      excerpt: 'How temp mail can help keep your online activity anonymous.',
      link: '/blogs/temp-mail-for-privacy',
    },
  ];
  return (
    <div className="flex-col bg-[#223558] shadow-md  w-full min-h-screen overflow-auto">


      <main className="flex flex-col bg-[#223558] w-full pt-30 items-center justify-center">
        <section className="flex flex-col items-center justify-center h-40 w-[90%] lg:w-[50%] border-2 rounded border-2 border-white">
          <h4 className="text-2xl font-bold text-white text-center">Your Email Address is Ready</h4>
          <div className="w-[90%] flex m-2">
            <div className="w-full flex bg-[#223558] drop-shadow-md rounded-full border-[2px] border-white">
              <input
                className="bg-[#223558] p-2 outline-none text-sm md:text-lg text-white rounded-full w-full"
                type="text"
                value={email}
                readOnly
              />
              <button
                className="bg-white rounded-full px-3 py-1 hover:bg-indigo-500 transition duration-300"
                onClick={copyToClipboard}
                title="Copy email"
              >
                <Image src={'../../copy.png'} height={20} width={20} alt="copy" />
              </button>
            </div>
          </div>
        </section>

        <p className="text-white text-center w-[90%] lg:w-[40%] mt-4">
          Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address.
        </p>
      </main>

      <div className="bg-white h-20 flex items-center justify-center space-x-5 shadow-2xl">
        <button className="px-4 py-2 bg-[#223558] drop-shadow-md bg-white rounded-full px-3 py-1 hover:bg-indigo-500 transition duration-300 border-white" onClick={copyToClipboard}>
          Copy
        </button>
        <button
          disabled={isBtnLoading}
          className=" px-4 py-2 bg-[#223558] drop-shadow-md bg-white rounded-full px-3 py-1 hover:bg-indigo-500 transition duration-300"
          onClick={handleReloadClick}
        >
          Refresh
        </button>
        <button className=" px-4 py-2 bg-[#223558] drop-shadow-md bg-white rounded-full px-3 py-1 hover:bg-indigo-500 transition duration-300" onClick={() => window.location.reload()}>
          Change
        </button>
      </div>

      <section className="flex flex-col items-center justify-center">
        <div className="bg-white border-2 border-white min-h-96 mt-2 w-[90%] lg:w-[50%] flex flex-col mb-3 rounded-md">
          <header className="bg-[#223558] min-h-10 flex items-center px-2 justify-between py-2 rounded-t">
            <h1 className="text-xl font-bold text-white">Inbox</h1>
            <div style={{ width: 45, height: 45, marginRight: 10, backgroundColor: 'white', borderRadius: '50%' }}>
              <CircularProgressbar value={countdown * 10} text={`${countdown}s`} />
            </div>
          </header>
          <ul className="flex flex-col overflow-y-auto max-h-96">
            {mails.length > 0 ? (
              mails.map((mail: mail, index) => (
                <li key={index}>
                  <button
                    className="flex w-full px-3 border-b py-2 items-start"
                    onClick={() => handleMailClick(mail.id, mail.subject)}
                  >
                    <Image className="h-8 w-10 rounded-full" src={'../../email.png'} alt="email" />
                    <div className="flex w-full justify-between px-3">
                      <div className="text-start">
                        <p className="text-sm font-semibold text-gray-900">{formatGmail(mail).email}</p>
                        <p className="text-xs text-gray-500">{formatGmail(mail).name}</p>
                      </div>
                      <div className="text-sm font-semibold text-gray-900 hidden md:block">
                        {mail.subject}
                      </div>
                    </div>
                  </button>
                </li>
              ))
            ) : (
              <div className="flex min-h-96 w-full justify-center items-center">
                <svg className="w-12 h-12 animate-spin text-gray-600" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M11.534 7h3.932a.25.25 0 01.192.41l-1.966 2.36a.25.25 0 01-.384 0l-1.966-2.36a.25.25 0 01.192-.41zM.534 9h3.932a.25.25 0 00.192-.41L2.692 6.23a.25.25 0 00-.384 0L.342 8.59a.25.25 0 00.192.41z" />
                  <path
                    fillRule="evenodd"
                    d="M8 3a5 5 0 00-3.857 1.818.5.5 0 11-.771-.636A6.002 6.002 0 0113.917 7H12.9A5.002 5.002 0 008 3zm-4.9 6a5.002 5.002 0 008.757 2.182.5.5 0 11.771.636A6.002 6.002 0 012.083 9H3.1z"
                  />
                </svg>
              </div>
            )}
          </ul>

          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
              <div className="bg-white rounded-lg shadow-lg w-[90%] h-[90%] p-4 overflow-y-auto relative">
                <h2 className="text-xl font-bold mb-2">{modalTitle}</h2>
                <div
                  className="prose max-w-full"
                  dangerouslySetInnerHTML={{ __html: modifiedHtmlContent }}
                />
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-2 right-2 text-red-500 font-bold"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
        <main className=" bg-[#223558] max-w-5xl text-white mx-auto w-[90%] lg:w-[50%] px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">What is Temp Mail?</h1>
          <p className="text-lg text-white mb-8">
            Temp mail, also known as temporary email, disposable email, or anonymous email, is a service that allows users to receive emails at a temporary address. It is useful for protecting personal email from spam and maintaining privacy online.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.link}
                title={post.title}
                excerpt={post.excerpt}
                link={post.link}
              />
            ))}
          </div>
        </main>
        
      </section>
     
    </div>
  );
}

export default Home;
