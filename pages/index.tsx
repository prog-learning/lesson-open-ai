import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [answers, setAnswers] = useState<any>([]);

  const submit = async () => {
    const res = await fetch('/api/test', {
      method: 'POST',
      body: JSON.stringify({
        message,
      }),
    });
    const data = await res.json();

    setAnswers([...answers, data]);
  };

  return (
    <div>
      <h1>Lesson OPEN AI</h1>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button onClick={submit}>送信</button>

      <div>
        {answers.map((answer) => (
          <div key={answer}>{answer?.choices[0].text}</div>
        ))}
      </div>
    </div>
  );
}
