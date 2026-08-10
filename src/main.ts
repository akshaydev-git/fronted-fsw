import "./styles.css";

interface StepConfig {
  title: string;
  sub: string;
  iconSvg: string;
}

interface DropdownOption {
  label: string;
  value: string;
  icon: string;
}

const API_BASE_URL = "https://backend-fsw.onrender.com";

const steps: StepConfig[] = [
  {
    title: "Personal Details",
    sub: "Full Name, Email Address, Phone Number, and Gender.",
    iconSvg: `<svg class="size-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>`,
  },
  {
    title: "Academic Details",
    sub: "Branch / Department, Year of Study, and Roll Number.",
    iconSvg: `<svg class="size-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147L12 14.6l7.74-4.453M12 4.5L2.25 10.125 12 15.75l9.75-5.625L12 4.5zM4.5 13.5v4.875L12 21.75l7.5-3.375V13.5" /></svg>`,
  },
  {
    title: "Domain Selection",
    sub: "Pick your 1st & 2nd choice domains and explain why.",
    iconSvg: `<svg class="size-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>`,
  },
  {
    title: "Additional Questions",
    sub: "Tell us about your motivation, skills, and workload balance.",
    iconSvg: `<svg class="size-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.75 0 01.75 0zm0 0h-.375m4.125 0a.375.375 0 11-.75 0 .375.75 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>`,
  },
  {
    title: "Review & Submit",
    sub: "Final step to review your responses and submit.",
    iconSvg: `<svg class="size-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" /></svg>`,
  },
];

const dropdownConfig: Record<string, DropdownOption[]> = {
  gender: [
    { label: "Male", value: "Male", icon: "👨‍💻" },
    { label: "Female", value: "Female", icon: "👩‍💻" },
    { label: "Other", value: "Other", icon: "✨" },
    { label: "Prefer not to say", value: "Prefer not to say", icon: "🔒" },
  ],
  branch: [
    { label: "CSE — Computer Science and Engineering", value: "CSE — Computer Science and Engineering", icon: "💻" },
    { label: "AIML — Artificial Intelligence and Machine Learning", value: "AIML — Artificial Intelligence and Machine Learning", icon: "🤖" },
    { label: "CSBS — Computer Science and Business System", value: "CSBS — Computer Science and Business System", icon: "📊" },
    { label: "CSDS — Computer Science Engineering (Data Science)", value: "CSDS — Computer Science Engineering (Data Science)", icon: "📈" },
    { label: "ECE — Electronics and Communication Engineering", value: "ECE — Electronics and Communication Engineering", icon: "⚡" },
  ],
  year: [
    { label: "2nd Year", value: "2nd Year", icon: "🚀" },
    { label: "3rd Year", value: "3rd Year", icon: "⚡" },
  ],
  domain1: [
    { label: "Public Relations", value: "Public Relations", icon: "🎤" },
    { label: "Design & Social Media", value: "Design & Social Media", icon: "🎨" },
    { label: "Technical", value: "Technical", icon: "🛠️" },
    { label: "Arts", value: "Arts", icon: "🎭" },
    { label: "Event Management", value: "Event Management", icon: "🎪" },
    { label: "Logistics", value: "Logistics", icon: "📦" },
    { label: "Publicity", value: "Publicity", icon: "🚀" },
    { label: "Documentation", value: "Documentation", icon: "📝" },
  ],
  domain2: [
    { label: "Public Relations", value: "Public Relations", icon: "🎤" },
    { label: "Design & Social Media", value: "Design & Social Media", icon: "🎨" },
    { label: "Technical", value: "Technical", icon: "🛠️" },
    { label: "Arts", value: "Arts", icon: "🎭" },
    { label: "Event Management", value: "Event Management", icon: "🎪" },
    { label: "Logistics", value: "Logistics", icon: "📦" },
    { label: "Publicity", value: "Publicity", icon: "🚀" },
    { label: "Documentation", value: "Documentation", icon: "📝" },
  ],
};

function getOptionHoverClass(val: string): string {
  switch (val) {
    case "Technical": return "hover:bg-blue-500/15 hover:text-blue-600 dark:hover:text-blue-300";
    case "Design & Social Media": return "hover:bg-purple-500/15 hover:text-purple-600 dark:hover:text-purple-300";
    case "Public Relations": return "hover:bg-amber-500/15 hover:text-amber-600 dark:hover:text-amber-300";
    case "Arts": return "hover:bg-pink-500/15 hover:text-pink-600 dark:hover:text-pink-300";
    case "Event Management": return "hover:bg-emerald-500/15 hover:text-emerald-600 dark:hover:text-emerald-300";
    case "Logistics": return "hover:bg-cyan-500/15 hover:text-cyan-600 dark:hover:text-cyan-300";
    case "Publicity": return "hover:bg-indigo-500/15 hover:text-indigo-600 dark:hover:text-indigo-300";
    case "Documentation": return "hover:bg-sky-500/15 hover:text-sky-600 dark:hover:text-sky-300";
    default: return "hover:bg-brand/15 hover:text-brand";
  }
}

let currentStep = 0;
const activeDropdownValues: Record<string, string> = {
  gender: "",
  branch: "",
  year: "",
  domain1: "",
  domain2: "",
};

let emailVerified = false;
let otpTimerId: number | null = null;
let otpSecondsRemaining = 0;

const form = document.getElementById("recruitment-form") as HTMLFormElement;
const stepNavList = document.getElementById("step-nav-list") as HTMLOListElement;
const progressBar = document.getElementById("progress-bar") as HTMLDivElement;
const progressText = document.getElementById("progress-text") as HTMLParagraphElement;
const stepIconBadge = document.getElementById("step-icon-badge") as HTMLDivElement;
const stepTitle = document.getElementById("step-title") as HTMLHeadingElement;
const stepSub = document.getElementById("step-sub") as HTMLParagraphElement;
const reviewSummaryList = document.getElementById("review-summary-list") as HTMLDListElement;
const btnBack = document.getElementById("btn-back") as HTMLButtonElement;
const btnNext = document.getElementById("btn-next") as HTMLButtonElement;
const btnNextLabel = document.getElementById("btn-next-label") as HTMLSpanElement;
const formActions = document.getElementById("form-actions") as HTMLDivElement;
const stepSuccess = document.getElementById("step-success") as HTMLDivElement;
const successMessageName = document.getElementById("success-message-name") as HTMLParagraphElement;

const emailInput = document.getElementById("email") as HTMLInputElement;
const btnSendOtp = document.getElementById("btn-send-otp") as HTMLButtonElement;
const otpSection = document.getElementById("otp-section") as HTMLDivElement;
const otpStatus = document.getElementById("otp-status") as HTMLSpanElement;
const otpTimer = document.getElementById("otp-timer") as HTMLSpanElement;
const btnResendOtp = document.getElementById("btn-resend-otp") as HTMLButtonElement;
const btnVerifyOtp = document.getElementById("btn-verify-otp") as HTMLButtonElement;
const emailVerificationMessage = document.getElementById("email-verification-message") as HTMLParagraphElement;

function setEmailMessage(message: string, type: "success" | "error" | "info") {
  if (!emailVerificationMessage) return;
  emailVerificationMessage.textContent = message;
  emailVerificationMessage.classList.remove("hidden", "text-destructive", "text-emerald-600", "text-brand");
  if (type === "error") emailVerificationMessage.classList.add("text-destructive");
  else if (type === "success") emailVerificationMessage.classList.add("text-emerald-600");
  else emailVerificationMessage.classList.add("text-brand");
}

function getOtpInputs(): HTMLInputElement[] {
  return [1, 2, 3, 4, 5, 6]
    .map((n) => document.getElementById(`otp-${n}`) as HTMLInputElement)
    .filter(Boolean);
}

function clearOtpInputs() {
  getOtpInputs().forEach((input) => {
    input.value = "";
    input.classList.remove("border-destructive");
  });
}

function getOtpValue(): string {
  return getOtpInputs().map((input) => input.value.trim()).join("");
}

function setOtpTimer(seconds: number) {
  otpSecondsRemaining = seconds;

  if (otpTimerId !== null) {
    window.clearInterval(otpTimerId);
    otpTimerId = null;
  }

  const tick = () => {
    const minutes = Math.floor(otpSecondsRemaining / 60);
    const secondsPart = otpSecondsRemaining % 60;
    otpTimer.textContent = `Resend available in ${String(minutes).padStart(2, "0")}:${String(secondsPart).padStart(2, "0")}`;

    if (otpSecondsRemaining <= 0) {
      if (otpTimerId !== null) {
        window.clearInterval(otpTimerId);
        otpTimerId = null;
      }
      otpTimer.classList.add("hidden");
      btnResendOtp.classList.remove("hidden");
      return;
    }

    otpSecondsRemaining -= 1;
  };

  otpTimer.classList.remove("hidden");
  btnResendOtp.classList.add("hidden");
  tick();
  otpTimerId = window.setInterval(tick, 1000);
}

function resetEmailVerification() {
  emailVerified = false;
  clearOtpInputs();
  otpSection.classList.add("hidden");
  btnResendOtp.classList.add("hidden");
  otpTimer.classList.remove("hidden");
  otpStatus.textContent = "";
  setEmailMessage("", "info");
  emailInput.classList.remove("border-emerald-500", "border-destructive");
  if (otpTimerId !== null) {
    window.clearInterval(otpTimerId);
    otpTimerId = null;
  }
}

async function sendOtp() {
  const email = emailInput.value.trim().toLowerCase();

if (!email) {
  emailInput.classList.add("border-destructive");
  setEmailMessage(
    "Please enter your GRIET college email address first.",
    "error"
  );
  emailInput.focus();
  return;
}

if (!/^[A-Za-z0-9._%+-]+@grietcollege\.com$/i.test(email)) {
  emailInput.classList.add("border-destructive");
  setEmailMessage(
    "Please enter a valid GRIET college email address.",
    "error"
  );
  emailInput.focus();
  return;
}

  btnSendOtp.disabled = true;
  setEmailMessage("Sending OTP...", "info");

  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/email/send-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to send OTP.");
    }

    emailVerified = false;
    otpSection.classList.remove("hidden");
    otpStatus.textContent = "";
    clearOtpInputs();
    setEmailMessage(
      "OTP sent successfully. Check your GRIET college email.",
      "success"
    );
    setOtpTimer(120);
    getOtpInputs()[0]?.focus();
  } catch (error) {
    setEmailMessage(error instanceof Error ? error.message : "Unable to send OTP.", "error");
  } finally {
    btnSendOtp.disabled = false;
  }
}

async function verifyOtp() {
  const email = emailInput.value.trim().toLowerCase();
  const otp = getOtpValue();

  if (otp.length !== 6 || !/^\d{6}$/.test(otp)) {
    otpStatus.textContent = "Enter all 6 digits";
    otpStatus.className = "text-[0.6875rem] font-semibold text-destructive";
    return;
  }

  btnVerifyOtp.disabled = true;
  otpStatus.textContent = "Verifying...";
  otpStatus.className = "text-[0.6875rem] font-semibold text-brand";

  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/email/verify-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "OTP verification failed.");
    }

    emailVerified = true;
    otpStatus.textContent = "Verified ✓";
    otpStatus.className = "text-[0.6875rem] font-semibold text-emerald-600";
    setEmailMessage("Email verified successfully.", "success");
    emailInput.classList.remove("border-destructive");
    emailInput.classList.add("border-emerald-500");

    if (otpTimerId !== null) {
      window.clearInterval(otpTimerId);
      otpTimerId = null;
    }
    otpTimer.classList.add("hidden");
    btnResendOtp.classList.add("hidden");
    emailInput.readOnly = true;
    btnSendOtp.disabled = true;
  } catch (error) {
    emailVerified = false;
    otpStatus.textContent = "Invalid OTP";
    otpStatus.className = "text-[0.6875rem] font-semibold text-destructive";
    setEmailMessage(error instanceof Error ? error.message : "OTP verification failed.", "error");
  } finally {
    btnVerifyOtp.disabled = false;
  }
}

async function resendOtp() {
  emailInput.readOnly = false;
  await sendOtp();
}

function initOtp() {
  if (!btnSendOtp || !btnVerifyOtp || !emailInput) return;

  btnSendOtp.addEventListener("click", sendOtp);
  btnVerifyOtp.addEventListener("click", verifyOtp);
  btnResendOtp?.addEventListener("click", resendOtp);

  emailInput.addEventListener("input", () => {
    if (emailVerified) resetEmailVerification();
    emailInput.classList.remove("border-destructive");
  });

  const otpInputs = getOtpInputs();
  otpInputs.forEach((input, index) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/g, "").slice(0, 1);
      if (input.value && otpInputs[index + 1]) otpInputs[index + 1].focus();
    });

    input.addEventListener("keydown", (event) => {
      if (event.key === "Backspace" && !input.value && otpInputs[index - 1]) {
        otpInputs[index - 1].focus();
      }
    });

    input.addEventListener("paste", (event) => {
      event.preventDefault();
      const pasted = event.clipboardData?.getData("text").replace(/\D/g, "").slice(0, 6) || "";
      pasted.split("").forEach((digit, i) => {
        if (otpInputs[i]) otpInputs[i].value = digit;
      });
      otpInputs[Math.min(pasted.length, 5)]?.focus();
    });
  });
}

function initCustomDropdowns() {
  const containers = document.querySelectorAll<HTMLDivElement>(".custom-dropdown-container");

  containers.forEach((container) => {
    const target = container.getAttribute("data-target");
    const placeholder = container.getAttribute("data-placeholder") || "Select option";
    if (!target || !dropdownConfig[target]) return;

    const hiddenInput = document.getElementById(target) as HTMLInputElement;
    const options = dropdownConfig[target]!;

    container.innerHTML = `
      <button type="button" class="dropdown-trigger flex w-full items-center justify-between rounded-2xl border border-border bg-card px-4 py-3 text-left text-sm font-medium transition-all hover:border-brand focus:border-brand focus:ring-4 focus:ring-brand/20 shadow-sm">
        <span class="dropdown-trigger-label text-muted-foreground">${placeholder}</span>
        <svg class="size-4 shrink-0 text-brand transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <div class="dropdown-menu hidden absolute left-0 right-0 top-full mt-2 z-50 rounded-2xl border border-border bg-card/95 p-1.5 shadow-2xl backdrop-blur-xl max-h-60 overflow-y-auto divide-y divide-border/50"></div>
    `;

    const triggerBtn = container.querySelector(".dropdown-trigger") as HTMLButtonElement;
    const triggerLabel = container.querySelector(".dropdown-trigger-label") as HTMLSpanElement;
    const triggerIcon = container.querySelector("svg") as unknown as SVGElement;
    const menu = container.querySelector(".dropdown-menu") as HTMLDivElement;

    const renderMenuOptions = () => {
      menu.innerHTML = "";

      options.forEach((opt) => {
        const isSelected = activeDropdownValues[target] === opt.value;
        const isLocked = target === "domain2" && activeDropdownValues["domain1"] === opt.value && opt.value !== "";
        const hoverColorClass = getOptionHoverClass(opt.value);

        const optBtn = document.createElement("button");
        optBtn.type = "button";
        optBtn.disabled = isLocked;
        optBtn.className = `flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-xs font-semibold sm:text-sm transition-all duration-150 ${
          isLocked ? "opacity-40 cursor-not-allowed bg-muted/40 text-muted-foreground" : isSelected ? "bg-brand/15 text-brand shadow-sm" : `${hoverColorClass} text-foreground`
        }`;

        optBtn.innerHTML = `
          <span class="flex items-center gap-2.5"><span class="text-base">${opt.icon}</span><span>${opt.label}</span></span>
          ${isLocked ? `<span class="text-[0.6875rem] font-bold uppercase tracking-wider text-destructive">🔒 1st Choice</span>` : isSelected ? `<svg class="size-4 text-brand" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>` : ""}
        `;

        if (!isLocked) {
          optBtn.addEventListener("click", () => {
            activeDropdownValues[target] = opt.value;
            if (hiddenInput) hiddenInput.value = opt.value;
            triggerLabel.innerHTML = `<span class="flex items-center gap-2 font-semibold text-foreground"><span class="text-base">${opt.icon}</span> ${opt.label}</span>`;
            triggerBtn.classList.remove("border-destructive");
            menu.classList.add("hidden");
            triggerIcon.classList.remove("rotate-180");

            if (target === "domain1" && activeDropdownValues["domain2"] === opt.value) {
              activeDropdownValues["domain2"] = "";
              const d2Hidden = document.getElementById("domain2") as HTMLInputElement;
              if (d2Hidden) d2Hidden.value = "";
              const d2Label = document.querySelector('[data-target="domain2"] .dropdown-trigger-label');
              if (d2Label) d2Label.innerHTML = "📌 Select 2nd domain preference";
            }

            initCustomDropdownsRefresh();
          });
        }

        menu.appendChild(optBtn);
      });
    };

    renderMenuOptions();

    triggerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isHidden = menu.classList.contains("hidden");
      document.querySelectorAll(".dropdown-menu").forEach((m) => m.classList.add("hidden"));
      document.querySelectorAll(".dropdown-trigger svg").forEach((svg) => svg.classList.remove("rotate-180"));
      if (isHidden) {
        menu.classList.remove("hidden");
        triggerIcon.classList.add("rotate-180");
      }
    });
  });

  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-menu").forEach((m) => m.classList.add("hidden"));
    document.querySelectorAll(".dropdown-trigger svg").forEach((svg) => svg.classList.remove("rotate-180"));
  });
}

function initCustomDropdownsRefresh() {
  const containers = document.querySelectorAll<HTMLDivElement>(".custom-dropdown-container");
  containers.forEach((container) => {
    const target = container.getAttribute("data-target");
    if (!target || target !== "domain2") return;
    const menu = container.querySelector(".dropdown-menu") as HTMLDivElement;
    if (!menu) return;

    const options = dropdownConfig[target]!;
    menu.innerHTML = "";

    options.forEach((opt) => {
      const isSelected = activeDropdownValues[target] === opt.value;
      const isLocked = activeDropdownValues["domain1"] === opt.value && opt.value !== "";
      const hoverColorClass = getOptionHoverClass(opt.value);

      const optBtn = document.createElement("button");
      optBtn.type = "button";
      optBtn.disabled = isLocked;
      optBtn.className = `flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-xs font-semibold sm:text-sm transition-all duration-150 ${
        isLocked ? "opacity-40 cursor-not-allowed bg-muted/40 text-muted-foreground" : isSelected ? "bg-brand/15 text-brand shadow-sm" : `${hoverColorClass} text-foreground`
      }`;

      optBtn.innerHTML = `
        <span class="flex items-center gap-2.5"><span class="text-base">${opt.icon}</span><span>${opt.label}</span></span>
        ${isLocked ? `<span class="text-[0.6875rem] font-bold uppercase tracking-wider text-destructive">🔒 1st Choice</span>` : isSelected ? `<svg class="size-4 text-brand" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>` : ""}
      `;

      if (!isLocked) {
        optBtn.addEventListener("click", () => {
          activeDropdownValues[target] = opt.value;
          const hiddenInput = document.getElementById(target) as HTMLInputElement;
          if (hiddenInput) hiddenInput.value = opt.value;

          const triggerLabel = container.querySelector(".dropdown-trigger-label") as HTMLSpanElement;
          const triggerBtn = container.querySelector(".dropdown-trigger") as HTMLButtonElement;
          const triggerIcon = container.querySelector("svg") as unknown as SVGElement;

          if (triggerLabel) triggerLabel.innerHTML = `<span class="flex items-center gap-2 font-semibold text-foreground"><span class="text-base">${opt.icon}</span> ${opt.label}</span>`;
          if (triggerBtn) triggerBtn.classList.remove("border-destructive");
          menu.classList.add("hidden");
          if (triggerIcon) triggerIcon.classList.remove("rotate-180");
        });
      }

      menu.appendChild(optBtn);
    });
  });
}

function renderStepNav() {
  if (!stepNavList) return;
  stepNavList.innerHTML = "";

  steps.forEach((step, index) => {
    const isActive = index === currentStep;
    const li = document.createElement("li");
    li.className = "shrink-0 lg:shrink";

    const button = document.createElement("button");
    button.type = "button";
    button.className = `flex w-full items-center gap-2 rounded-2xl px-3 py-2.5 text-left transition-all lg:gap-3 lg:px-3.5 lg:py-3 ${isActive ? "border-l-4 border-brand bg-accent shadow-sm" : "hover:bg-muted text-muted-foreground"}`;

    button.innerHTML = `
      <span class="flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${isActive ? "bg-brand text-brand-foreground" : "border border-border text-muted-foreground"}">${index + 1}</span>
      <span class="leading-tight">
        <span class="block whitespace-nowrap text-xs font-semibold lg:whitespace-normal lg:text-sm ${isActive ? "text-brand" : "text-foreground"}">${step.title}</span>
        <span class="hidden text-xs text-muted-foreground lg:block">${step.sub}</span>
      </span>
    `;

    button.addEventListener("click", () => {
      if (index < currentStep || validateStep(currentStep)) goToStep(index);
    });

    li.appendChild(button);
    stepNavList.appendChild(li);

    if (isActive) {
      setTimeout(() => button.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" }), 50);
    }
  });
}

function populateReviewSummary() {
  if (!reviewSummaryList) return;
  const formData = new FormData(form);

  const summaryItems = [
    { label: "Full Name", value: (formData.get("fullName") as string) || "—" },
    { label: "Email Address", value: (formData.get("email") as string) || "—" },
    { label: "Phone Number", value: (formData.get("phone") as string) || "—" },
    { label: "Gender", value: (formData.get("gender") as string) || "—" },
    { label: "Branch / Department", value: (formData.get("branch") as string) || "—" },
    { label: "Year of Study", value: (formData.get("year") as string) || "—" },
    { label: "Roll Number", value: (formData.get("rollNo") as string) || "—" },
    { label: "1st Choice Domain", value: (formData.get("domain1") as string) || "—" },
    { label: "2nd Choice Domain", value: (formData.get("domain2") as string) || "—" },
    { label: "Why have you selected these domains? what made you interested in them?", value: (formData.get("whyDomain1") as string) || "—" },
    { label: "Are you currently a member of any other clubs or organizations?. If yes, mention them", value: (formData.get("whyDomain2") as string) || "—" },
    { label: "Why Join FSW?", value: (formData.get("whyJoin") as string) || "—" },
    { label: "Skills & Experience", value: (formData.get("skillsExperience") as string) || "—" },
    { label: "Academic Balance", value: (formData.get("academicBalance") as string) || "—" },
  ];

  reviewSummaryList.innerHTML = summaryItems.map((item) => `
    <div class="grid gap-1 px-3 py-2.5 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-4 sm:px-4 sm:py-3">
      <dt class="text-xs font-medium text-muted-foreground sm:text-sm">${item.label}</dt>
      <dd class="min-w-0 break-words font-semibold text-foreground">${item.value}</dd>
    </div>
  `).join("");
}

function validateStep(stepIndex: number): boolean {
  const currentPanel = document.getElementById(`step-content-${stepIndex}`);
  if (!currentPanel) return true;

  const requiredInputs = currentPanel.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("[required]");
  let isValid = true;

  requiredInputs.forEach((input) => {
    const val = input.value ? input.value.trim() : "";
    const parentContainer = input.closest("div");
    let isFieldInvalid = !val;

    if (input.name === "phone") {
      const digitsOnly = val.replace(/\D/g, "");
      isFieldInvalid = digitsOnly.length < 10;
    }

    if (isFieldInvalid) {
      isValid = false;
      input.classList.add("border-destructive");
      const customTrigger = parentContainer?.querySelector(".dropdown-trigger");
      if (customTrigger) customTrigger.classList.add("border-destructive");
    } else {
      input.classList.remove("border-destructive");
      const customTrigger = parentContainer?.querySelector(".dropdown-trigger");
      if (customTrigger) customTrigger.classList.remove("border-destructive");
    }
  });

  return isValid;
}

function goToStep(index: number) {
  if (index < 0 || index >= steps.length) return;

  const currentPanel = document.getElementById(`step-content-${currentStep}`);
  if (currentPanel) currentPanel.classList.add("hidden");

  currentStep = index;

  const targetPanel = document.getElementById(`step-content-${currentStep}`);
  if (targetPanel) targetPanel.classList.remove("hidden");

  const stepInfo = steps[currentStep];
  if (stepInfo) {
    stepIconBadge.innerHTML = stepInfo.iconSvg;
    stepTitle.textContent = stepInfo.title;
    stepSub.textContent = stepInfo.sub;
  }

  const pct = Math.round(((currentStep + 1) / steps.length) * 100);
  progressBar.style.width = `${pct}%`;
  progressText.textContent = `${pct}% Completed`;

  btnBack.disabled = currentStep === 0;

  if (currentStep === steps.length - 1) {
    btnNextLabel.textContent = "Submit Application";
    populateReviewSummary();
  } else {
    btnNextLabel.textContent = "Next Step"; 
  }

  renderStepNav();
}

function initTypingEffect() {
  const typingTextEl = document.getElementById("typing-text") as HTMLElement | null;
  if (!typingTextEl) return;

  const phrases = ["Build.", "Learn.", "Lead.", "Build. Learn. Lead."];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentPhrase = phrases[phraseIndex]!;

    if (isDeleting) {
      charIndex--;
      typingTextEl!.textContent = currentPhrase.substring(0, charIndex);
    } else {
      charIndex++;
      typingTextEl!.textContent = currentPhrase.substring(0, charIndex);
    }

    let delay = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentPhrase.length) {
      delay = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

function mapBranch(value: string): string {
  return value.split(" — ")[0].trim();
}

function mapYear(value: string): number {
  return value.startsWith("2nd") ? 2 : 3;
}

function normalizePhone(value: string): string {
  const digits = value.replace(/\D/g, "");
  return digits.startsWith("91") && digits.length === 12 ? digits.slice(2) : digits;
}

function buildApplicationPayload() {
  const formData = new FormData(form);

  return {
    fullName: String(formData.get("fullName") || "").trim(),
    email: String(formData.get("email") || "").trim().toLowerCase(),
    phoneNumber: normalizePhone(String(formData.get("phone") || "")),
    gender: String(formData.get("gender") || "").trim(),
    department: mapBranch(String(formData.get("branch") || "")),
    yearOfStudy: mapYear(String(formData.get("year") || "")),
    rollNumber: String(formData.get("rollNo") || "").trim(),
    firstChoiceDomain: String(formData.get("domain1") || "").trim(),
    whyFirstChoice: String(formData.get("whyDomain1") || "").trim(),
    secondChoiceDomain: String(formData.get("domain2") || "").trim(),
    whySecondChoice: String(formData.get("whyDomain2") || "").trim(),
    whyJoinFSW: String(formData.get("whyJoin") || "").trim(),
    skillsAndExperience: String(formData.get("skillsExperience") || "").trim(),
    academicBalance: String(formData.get("academicBalance") || "").trim(),
  };
}

async function submitApplication() {
  if (!emailVerified) {
    setEmailMessage("Please verify your email before submitting the application.", "error");
    goToStep(0);
    return;
  }

  const payload = buildApplicationPayload();

  btnNext.disabled = true;
  btnNextLabel.textContent = "Submitting...";

  try {
    const response = await fetch(`${API_BASE_URL}/api/applications`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to submit application.");
    }

    for (let i = 0; i < steps.length; i++) {
      const panel = document.getElementById(`step-content-${i}`);
      if (panel) panel.classList.add("hidden");
    }

    formActions.classList.add("hidden");
    stepSuccess.classList.remove("hidden");
    stepSuccess.classList.add("flex");

    const name = payload.fullName || "Applicant";
    successMessageName.textContent = `Thanks ${name}! Our team will review your application and reach out over email for interview scheduling.`;

    progressBar.style.width = "100%";
    progressText.textContent = "100% Completed";
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to submit application.";
    alert(message);
    btnNext.disabled = false;
    btnNextLabel.textContent = "Submit Application";
  }
}

function init() {
  initCustomDropdowns();
  initTypingEffect();
  initOtp();
  renderStepNav();
  goToStep(0);

  btnBack.addEventListener("click", () => {
    if (currentStep > 0) goToStep(currentStep - 1);
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!validateStep(currentStep)) return;

    if (currentStep < steps.length - 1) {
      if (currentStep === 0 && !emailVerified) {
        setEmailMessage("Verify your email before continuing.", "error");
        return;
      }
      goToStep(currentStep + 1);
    } else {
      await submitApplication();
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
