<?php

class About extends Controller
{
    public function index($nama = 'Renal Eki Riyanto', $umur = 21, $pekerjaan = 'Mahasiswa')
    {
        $data['judul'] = 'About Me';
        $data['nama'] = $nama;
        $data['umur'] = $umur;
        $data['pekerjaan'] = $pekerjaan;
        $this->view('templates/header', $data);
        $this->view('about/index');
        $this->view('templates/footer');
    }

    public function page()
    {
        $data['judul'] = 'Page';
        $this->view('templates/header', $data);
        $this->view('about/page');
        $this->view('templates/footer');
    }
}
