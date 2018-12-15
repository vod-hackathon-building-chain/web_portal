// Call the dataTables jQuery plugin
$(document).ready(function() {
  if (! $.fn.dataTable.isDataTable( '#dataTable' ) ) {
    $('#dataTable').DataTable({
      "order": [[ 6, "desc" ]]
    });
  }
  if (! $.fn.dataTable.isDataTable( '#dataTable2' ) ) {
    $('#dataTable2').DataTable({
      "order": [[ 7, "desc" ]]
    });
  }

});
