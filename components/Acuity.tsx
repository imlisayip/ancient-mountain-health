/* eslint-disable @next/next/no-sync-scripts */
export default function Acuity({}) {
  return (
    <div className="wrapper">
      <iframe
        src="https://app.acuityscheduling.com/schedule.php?owner=18622354&calendarID=7855956"
        title="Schedule Appointment"
        width="100%"
        height="800"
        frameBorder="0"
      ></iframe>
      <script
        src="https://embed.acuityscheduling.com/js/embed.js"
        type="text/javascript"
      ></script>
    </div>
  );
}
