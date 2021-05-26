<template>
  <div>
    <h1>Imágenes</h1>
    <div class="row">
      <div class="col-lg-6">
        <div class="btn-group w-100">
          <span class="btn btn-success col fileinput-button dz-clickable">
            <i class="fas fa-plus"></i>
            <span>Add files</span>
          </span>
          <button type="submit" class="btn btn-primary col start">
            <i class="fas fa-upload"></i>
            <span>Start upload</span>
          </button>
          <button type="reset" class="btn btn-warning col cancel">
            <i class="fas fa-times-circle"></i>
            <span>Cancel upload</span>
          </button>
        </div>
      </div>
      <div class="col-lg-6 d-flex align-items-center">
        <div class="fileupload-process w-100">
          <div
            id="total-progress"
            class="progress progress-striped active"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow="0"
          >
            <div
              class="progress-bar progress-bar-success"
              style="width:0%;"
              data-dz-uploadprogress=""
            ></div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-md-4">
        <div class="info-box">
          <div class="alert-dismissible" style="padding: 0px;">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">
              ×
            </button>
          </div>
          <div class="position-relative">
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/246/312/original/mountain-lake-sunset-landscape-first-person-view-vector.jpg"
              alt="Photo 1"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="info-box">
          <div class="alert-dismissible" style="padding: 0px;">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">
              ×
            </button>
          </div>
          <div class="position-relative">
            <img
              src="https://ii1.pepperfry.com/media/catalog/product/r/o/800x880/royal-wing-chair-in-blue-color-by-dreamzz-furniture-royal-wing-chair-in-blue-color-by-dreamzz-furnit-6hcjya.jpg"
              alt="Photo 1"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="info-box">
          <div class="alert-dismissible" style="padding: 0px;">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">
              ×
            </button>
          </div>
          <div class="position-relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQkp2lwgs4bRDuM5L7ZvJpxxhT15IYTJ2l-A&usqp=CAU"
              alt="Photo 1"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
