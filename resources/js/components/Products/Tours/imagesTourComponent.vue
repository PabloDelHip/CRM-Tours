<template>
  <div>
    <h1>Imágenes</h1>
    <div class="row">
      <div class="col-lg-4">
        <div class="btn-group w-100">
          <input type="file" id="file" class="file"
            @change="onFileChange"
            accept="image/*"
            style="display: none;"
            multiple="multiple"
          >
          <label for="file" class="btn btn-success col fileinput-button dz-clickable">
            <i class="fas fa-plus"></i>
            <span>Add files</span>
          </label>
          <!-- <button type="submit" class="btn btn-primary col start">
            <i class="fas fa-upload"></i>
            <span>Start upload</span>
          </button>
          <button type="reset" class="btn btn-warning col cancel">
            <i class="fas fa-times-circle"></i>
            <span>Cancel upload</span>
          </button> -->
        </div>
      </div>
      <div class="col-lg-8 d-flex align-items-center">
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
      <div class="col-md-3" v-for="(preview, index) in imagesPreview" :key="index">
        <div class="info-box">
          <div class="alert-dismissible" style="padding: 0px;">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">
              ×
            </button>
          </div>
          <div class="position-relative">
            <img
              v-bind:src="preview"
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
import ImagesTour from "../../../providers/products/tours/ImagesTour"

const ImagesTourResource = new ImagesTour();
export default {
  props: {
    idTour: {
      type: Number,
      required: true,
    },
  },
  data(){
    return {
      pictures: [],
      imagesPreview: [],
    };
  },
  methods: {
    onFileChange(event) {
      var files = event.target.files;
      
      for (var i = 0; i < files.length; i++) {
        var currentPicture = files[i];
        if (
          !currentPicture ||
          !/\.(jpe?g|png|gif)$/i.test(currentPicture.name) ||
          currentPicture.size / 1024 / 1024 > 2
        ) {
          return;
        }
        let reader = new FileReader();

        reader.addEventListener(
          "load",
          function() {
            this.imagesPreview.push(reader.result);
          }.bind(this),
          false
        );

        reader.readAsDataURL(currentPicture);
        this.pictures.push(currentPicture);
      }
    },
  },
};
</script>
