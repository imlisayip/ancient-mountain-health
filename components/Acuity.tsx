export default function Acuity({}) {
  return (
    <div className="wrapper">
      <iframe
        src="https://app.acuityscheduling.com/schedule.php?owner=18622354"
        title="Schedule Appointment"
        width="100%"
        height="800"
        frameBorder="0"
      ></iframe>
      // eslint-disable-next-line @next/next/no-sync-scripts
      <script
        src="https://embed.acuityscheduling.com/js/embed.js"
        type="text/javascript"
      ></script>
    </div>
  );
}
