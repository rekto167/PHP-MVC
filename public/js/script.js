$(function() {

    $('.tampilModalUbah').on('click', function() {
        $('#judulModal').html('Ubah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Ubah Data');
        const id = $(this).data('id');
        $('.modal-body form').attr('action', 'http://localhost/phpmvc/public/mahasiswa/ubah');
        
        $.ajax({

            url: 'http://localhost/phpmvc/public/mahasiswa/getubah',
            data: {id : id},
            method: 'post',
            dataType: 'json',
            success: function(data) {
                $('#nama').val(data.nama);
                $('#nobp').val(data.nobp);
                $('#email').val(data.email);
                $('#jurusan').val(data.jurusan);
                $('#id').val(data.id);
            }
        });
    });

    $('.tampilModalTambah').on('click', function() {
        $('#judulModal').html('Tambah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Tambah Data');
    });


});