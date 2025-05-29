const getIncomingCallDialog = (
  callType,
  acceptCallHandler,
  rejectCallHandler
) => {
  console.log("getting incoming call dialog");
  const dialog = document.createElement("div");
  dialog.classList.add("dialog-wrapper");
  const dialogContent = document.createElement("div");
  dialogContent.classList.add("dialog-content");

  const dialogHtml = document.getElementById("dialog");
  dialogHtml.appendChild(dialog);
};

export const showIncomingCallDialog = (
  callType,
  acceptCallHandler,
  rejectCallHandler
) => {
  const incomingCallDialog = getIncomingCallDialog();
};
