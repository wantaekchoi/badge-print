import './App.css';
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import PrintCertificate from "./PrintCertificate";
import DragAndDrop from "./DragAndDrop";

function App() {
  const [badgeData, setBadgeData] = useState(null);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const onDrop = (files) => {
    const file = files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = JSON.parse(event.target.result);
      setBadgeData(data);
    };
    reader.readAsText(file);
  };

  const badgeProps = badgeData && {
    name: badgeData?.badge?.name,
    image: badgeData?.badge?.image,
    issuer: {
      name: badgeData?.badge?.issuer?.name,
      url: badgeData?.badge?.issuer?.url,
    },
    recipient: {
      name: badgeData?.recipientProfile?.name,
      email: badgeData?.recipient?.identity,
    },
    issueDate: new Date(badgeData?.issuedOn)?.toISOString(),
    txId: badgeData?.signature?.anchors?.find((anchor) => anchor.type === "ETHData")?.sourceId,
    hash: badgeData?.signature?.targetHash,
  };

  return (
    <div className="App">
      <DragAndDrop onDrop={onDrop}>
        {badgeProps && <PrintCertificate ref={componentRef} badge={badgeProps} />}
      </DragAndDrop>
      <button onClick={handlePrint} disabled={!badgeProps}>Print Badge</button>
    </div>
  );
}

export default App;
